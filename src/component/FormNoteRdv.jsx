import React, { Component } from 'react';
import URLHelper from '../Helper/URLHelper';
class FormNoteRdv extends Component {
    state = { 
        value: ''
    } 
    style = {
        textAlign: 'center'
    }
    nb=0;
    id="";
    idre="";
    handleChange=(event)=>{
            this.nb=event.target.value;
            this.setState({
                value: event.target.value
            });
    }
    sendData = (url) =>{
        console.log(url+"?idcl="+this.id+"&idre="+this.idre+"&nb="+this.nb);
        fetch(url+"?idcl="+this.id+"&idre="+this.idre+"&nb="+this.nb, {method: 'GET', headers:{}
        })
        .then(res=>{return res.json() ; })
        .then(data=>{ 
            if(data.etat) window.location.replace("/mainAdmin");
            // console.log(data);
           
         });
    }
    confirmMark = ()=>{
        this.sendData(URLHelper.urlgen("receiveUpdate.php"));
    }
    render() { 
        const params = new URLSearchParams(window.location.search);
        this.id=params.get("id");
        this.idre=params.get("recrut");
        
        return (
            <table style={this.style}>
                    <tr>
                        <td>Candidat</td>
                        <td>{params.get("id")}</td>
                    </tr>
                    <tr>
                        <td>Note</td>
                        <td><input value={this.nb} type="number" 
                        onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                            }
                        }} onChange={this.handleChange} /></td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <button onClick={this.confirmMark} className="btn-primary btn btn-sm">Valider</button>
                        </td>
                    </tr>
            </table>
        );
    }
}
 
export default FormNoteRdv;