import React, { Component } from 'react';
import RdvMitokana from './RdvMitokana';
import MoveButton from './MoveButton';
// import { Link } from 'react-router-dom';
import './../assets/dist/css/bootstrap.min.css'
import './../assets/css/TableList.css'
import URLHelper from '../Helper/URLHelper';

// import $ from "jquery";
class ListeRdv extends Component {
    state = {
        rdvs:[]
    }
    style = {
        textAlign: 'center'
    }
    constructor () {
        super();
        this.initialize();
    }

    initialize =()=> {
        const params = new URLSearchParams(window.location.search);
        let data=params.get("data");
        this.askService(URLHelper.urlgen("testFA.php?data="+data));
        console.log(URLHelper.urlgen("testFA.php?data="+data));
    }

    setRDVS=temp=>{
        this.setState(
            {
                rdvs:temp 
            }
        )
    }
    
    handleUp = idCdt =>{
        console.log("Miakatra ",idCdt);
        let iFahatongavana=0;
        let rdvs = this.state.rdvs;
        for (let index = 0; index < rdvs.length; index++) {
            if(rdvs[index].candidat===idCdt){
                iFahatongavana=index;
                break;
            }
        }
        if(iFahatongavana!==0){
            let temp=rdvs[iFahatongavana].candidat;
            rdvs[iFahatongavana].candidat=rdvs[iFahatongavana-1].candidat;
            rdvs[iFahatongavana-1].candidat=temp;
        }
        this.setState({rdvs:rdvs})
    }

    handleDown = idCdt =>{
        console.log("Midina ",idCdt);
        let iFahatongavana=0;
        let rdvs = this.state.rdvs;
        for (let index = 0; index < rdvs.length; index++) {
            if(rdvs[index].candidat===idCdt){
                iFahatongavana=index;
                break;
            }
        }
        if(iFahatongavana!==rdvs.length-1){
            let temp=rdvs[iFahatongavana].candidat;
            rdvs[iFahatongavana].candidat=rdvs[iFahatongavana+1].candidat;
            rdvs[iFahatongavana+1].candidat=temp;
        }
        this.setState({rdvs:rdvs})
    }
    
    handleDelete = idCdt => {
        console.log("Delete ",idCdt);
        let listeRdvtemp=[];
        let lsrdv = this.state.rdvs;
        let iDate=0;
        for (let index = 0; index < lsrdv.length; index++) {
            let element = lsrdv[index];
            if(element.candidat===idCdt){
                if(index===lsrdv.length-1){
                    break;
                }
                else{
                    index++;
                }
            }
            listeRdvtemp.push({candidat:lsrdv[index].candidat, date:lsrdv[iDate].date, bureau:lsrdv[iDate].bureau });
            iDate++;
        }
        const newListeRdv = listeRdvtemp;
        this.setState({rdvs: newListeRdv});
    };
    sendData = (url) =>{
        console.log(this.state);
        console.log(JSON.stringify(this.state));
        fetch(url+"?test="+JSON.stringify(this.state), {method: 'GET', headers:{}
        })
    }
    confirmAppointment = ()=>{
        this.sendData(URLHelper.urlgen("receive.php"));
    }
    askService = (url) => {
        fetch(url,{crossDomain:true,method:'GET', headers: {}})
        .then(res => { return res.json();})
        .then(data=>{
            console.log(data);
            this.setState(
                {
                    rdvs: data
                }
            )
         })
    }
    render() { 
        
        return (
            <div className="card shadow mb-3">
                                        
            <div className="title-card card-header py-3">
                <p className="text m-0 fw-bold">{this.props.title}</p>
            </div>
        
            <div className="card-body">
                <div className="d-flex flex-column flex-shrink-0">
                    <div className="table-responsive">
                        <table className="table table-striped table-sm" style={this.style}>
                            <thead>
                                <tr>
                                    <th style={{color:"black"}}>Candidat</th>
                                    <th style={{color:"black"}}>Heure RDV</th>
                                    <th style={{color:"black"}}>Bureau</th>
                                </tr>
                            </thead>
                            <tbody>
                                { this.state.rdvs.map(rdv => <tr><RdvMitokana 
                                    candidat={rdv.candidat} 
                                    heure={rdv.date} 
                                    bureau={rdv.bureau}
                                    
                                    />
                                    <MoveButton 
                                    onDelete={this.handleDelete} 
                                    onUp={this.handleUp} 
                                    onDown={this.handleDown}
                                    candidat={rdv.candidat}
                                 />
                                    </tr>)}
                                <tr>
                                    <td colSpan={5}> 
                                        <button onClick={this.confirmAppointment} className="btn btn-success btn-sm">Confirmer Liste</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={5}> 
                                        <button onClick={this.initialize} className="btn btn-primary btn-sm">Reinitialiser Liste</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
        
        
            </div>
        
        </div>);
    }
}
 
export default ListeRdv;