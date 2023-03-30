import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class FormOrganisationRdv extends Component {
    state = { 
        dateDebut: new Date(Date.now),
        heureDeb:"",
        heureFin:"",
        bureaux:[
            { 
                id:1,
                value: ""
            }
        ],
        idrecrutement: "",
        setB(b){this.bureaux=b},
        setHd(hd){this.heureDeb=hd},
        setHf(f){this.heureFin=f},
        setDeb(d){this.dateDebut=d},
        setBI(b, indice){this.bureaux[indice]=b},
        addB(){ 
            this.bureaux.push({
                id:1,
                value: ""
            });
        }
    } 
    handleChangeDeb=(event)=>{
        console.log(event.target.value,"-------");
        this.setState({
            dateDebut: event.target.value,
            heureDeb:this.state.heureDeb,
            heureFin:this.state.heureFin,
            bureaux:this.state.bureaux,
            idrecrutement: this.state.idrecrutement,
        })
    }
    
    handleChangeHd=(event)=>{
        console.log(event.target.value);
        this.setState({
            dateDebut: this.state.dateDebut,
            heureDeb:event.target.value,
            heureFin:this.state.heureFin,
            bureaux:this.state.bureaux,
            idrecrutement: this.state.idrecrutement,
        })
    }
    handleChangeHf=(event)=>{
        console.log(event.target.value);
        this.setState({
            dateDebut: this.state.dateDebut,
            heureDeb:this.state.heureDeb,
            heureFin:event.target.value,
            bureaux:this.state.bureaux,
            idrecrutement: this.state.idrecrutement,
        })
    }
    handleAdd=()=>{
        console.log("test");
        this.setState({
            dateDebut: this.state.dateDebut,
            heureDeb:this.state.heureDeb,
            heureFin:this.state.heureFin,
            bureaux:[...this.state.bureaux,
                {
                    id:this.state.bureaux.length+1,
                    value: ""
                }]
            ,
            idrecrutement: this.state.idrecrutement,
        })
    } 
    handleDeskChange=(id)=>{
        let idn=Number.parseInt(id);
        let temptab=this.state.bureaux;
        temptab[idn-1].value=document.getElementById("b"+id).value;
        this.setState({
            dateDebut: this.state.dateDebut,
            heureDeb:this.state.heureDeb,
            heureFin:this.state.heureFin,
            bureaux:temptab,
            idrecrutement: this.state.idrecrutement,
        })
    }
    style={
        textAlign: "center"
    }
    inputStyle={
        width:"100%"
    }
    constructor(){
        super();
        const params = new URLSearchParams(window.location.search);
        let data=params.get("id");
        console.log(data);
        this.state={
            dateDebut: this.state.dateDebut,
            heureDeb:this.state.heureDeb,
            heureFin:this.state.heureFin,
            bureaux:this.state.bureaux,
            idrecrutement: ""+data,
        }
        
    }
    render() { 
        return (
            <table style={this.style}>
                <tr>
                    <td>Date de debut</td>
                    <td>
                        <input style={this.inputStyle} type="datetime-local" name="" id="deb" onChange={this.handleChangeDeb}/>
                    </td>
                </tr>
                <tr>
                    <td>Heure de debut journee</td>
                    <td>
                        <input style={this.inputStyle} type="time" name="" id="hdeb" onChange={this.handleChangeHd} />
                    </td>
                </tr>
                <tr>
                    <td>Heure de fin journee</td>
                    <td>
                        <input style={this.inputStyle} type="time" name="" id="hfin" onChange={this.handleChangeHf}/>
                    </td>
                </tr>
                {this.state.bureaux.map(br=>(<tr>
                    <td>Bureau {br.id}</td>    
                    <td>
                        <input style={this.inputStyle} type="text" name="" id={"b"+br.id} onChange={()=>this.handleDeskChange(br.id)} />
                    </td>
                    <td><button className="btn btn-secondary" onClick={this.handleAdd} >add</button></td>
                </tr>)
                
                )}
                <tr>
                    <td colSpan={2}>
                        <Link to={"/genListRdv?data="+JSON.stringify(this.state)} ><button className="btn btn-success">Créer les rendez-vous</button></Link>
                    </td>
                </tr>
            </table>
        );
    }
}
 
export default FormOrganisationRdv;