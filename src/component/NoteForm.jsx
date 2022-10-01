import './../assets/dist/css/bootstrap.min.css'
import './../assets/css/CoefficientForm.css'
import React, { Component } from 'react';
import URLHelper from '../Helper/URLHelper';
class NoteForm extends Component 
{
    state = {
        liste:[{}]
    }
    donn = {
        listechamp: [{}],
        reponsechamp: [{}],
        rc: [{}],
    }
    liste=[];
    addState=(id)=>{
        this.setState({liste:
            [
            ...this.state.liste,
            {
                id: this.state.liste.length+1,
                idreponse:id,
                value: 0
            }
        ]})
    }
    addListe=(id)=>{
        this.liste=
            [
            ...this.liste,
            {
                id: this.liste.length+1,
                idreponse:id,
                value: 0
            }
        ]};

    handleMarkChange=(id)=>{
        let idn=Number.parseInt(id);
        let temptab=this.liste;
        if(Number.parseInt(document.getElementById(""+id).value)>20){
            console.log("error");
            document.getElementById(""+id).value=20;
            alert("error, max mark 20");
            temptab[idn-1].value=20;
        }
        else
            temptab[idn-1].value=Number.parseInt(document.getElementById(""+id).value);
        this.liste=temptab;
        console.log(this.liste);
    }
    
    initialize =()=> {
        const params = new URLSearchParams(window.location.search);
        let idc=params.get("idc");
        let idr=params.get("idr");
        this.askService(URLHelper.urlgen("infoCanditat.php?idc="+idc+"&idr="+idr));
    }
    askService = (url) => {
        console.log("askService");
        console.log(url);
        fetch(url,{crossDomain:true,method:'GET', headers: {}})
        .then(res => {   return res.json();})
        .then(data=>{
            console.log("data");
            console.log(data);
            this.setState(data);
            this.donn = data;
            console.log(this.donn.rc.length);
            for (let index = 0; index < this.donn.rc.length; index++) {
                const element = this.donn.rc[index];
                this.addListe(element.idreponse);
                console.log(index+"---------");
                console.log(this.liste);
            }
        })
    }
    constructor () {
        super();
        this.initialize();
        console.log("-----------------------constructor---------------------------------------------------");
    }
    onlyNumber=(event) => {
        if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
        }
    }
    sendData = (url) =>{
        fetch(url+"?test="+JSON.stringify(this.liste), {method: 'GET', headers:{}
        })
        console.log(url+"?test="+JSON.stringify(this.liste));
    }
    confirmMarks = ()=>{
        this.sendData(URLHelper.urlgen("receiveMarks.php"));
    }
    render() {
        return (
            <div className="container">
            <div className="row justify-content-center">

                <div className="col-md-9 col-lg-12 col-xl-10">

                    

                        <div className="container">

                            <div className="row">

                                <div className="col-lg-6 d-none d-lg-flex">
                                <div className="p-5">
                                        <div className="text-center">
                                            <h4 className="t mb-4">Information sur le candidat</h4>
                                        </div>

                                        <br/>

                                        <form className="user row">
                                            
                                            <div className="mb-3 col-6">
                                                <center><label  className="form-label">Nom</label></center>
                                                <center><p>{this.donn.reponsechamp[0].nom}</p></center>
                                            </div>

                                            <div className="mb-3 col-6">
                                                <center><label  className="form-label">Prenom</label></center>
                                                <center><p>{this.donn.reponsechamp[0].prenom}</p></center>
                                            </div>
                                            {this.donn.listechamp.map(ch=>
                                                <div className="mb-3 col-6">
                                                <center>
                                                    <label  className="form-label">{ch.nom}</label>
                                                </center>
                                                <center>
                                                    {
                                                        this.donn.rc.filter(rep=>rep.idchamp==ch.idchamp).map(val=><p>{val.valiny}</p>)
                                                    }
                                                    </center>
                                                </div>)}

                                            <hr/>
                                            <hr/>
                                        </form>

                                    </div>

                                </div>

                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h4 className="t mb-4">Saisie des notes</h4>
                                        </div>

                                        <br/>

                                        <form className="user row">
                                            {this.donn.listechamp.map(ch=>
                                                <div className="mb-3 col-6">
                                                    <center>
                                                        <label  className="form-label">{ch.nom}</label>
                                                    </center>
                                                    <center>
                                                    <input type="number" id={this.donn.listechamp.indexOf(ch)+1} min="0" max="20" className="form-control" onKeyPress={this.onlyNumber} onChange={()=>this.handleMarkChange(this.donn.listechamp.indexOf(ch)+1)} />
                                                    </center>
                                                </div>)}

                                            
                                            <hr/>
                                            <hr/>
                                            
                                            <button className=" submit btn btn-primary d-block btn-user w-100" type="button" onClick={this.confirmMarks} >Enregistrer</button>
                                            
                                        </form>

                                    </div>

                                </div>
                                
                            </div>

                        </div>

                    

                </div>

            </div>
            </div>
        );
    }
}
export default NoteForm;