import React, { Component } from 'react';
import URLHelper from '../../Helper/URLHelper';
class DemandeConge extends Component {
    state = { 
        debut:"",
        fin:"",
        motif:"",
        idemploye:"EM1"
    }
    check=()=>{
        if(this.state.debut!="" && this.state.fin!="" && this.state.motif!="" ){
            return ""
        }
        else{
            return "disable"
        }
    } 
    style={ width: '100%', height: '50%', margin: "auto"}
    handleDebChange=(event)=>{
        if ((new Date(event.target.value).getTime() < new Date(this.state.fin).getTime() || this.state.fin==="" ) ){
            if (new Date(event.target.value).getTime() > Date.now()) {
                this.setState({debut:event.target.value});
            }
            else{
                console.log("Date passée ");
                event.target.value = this.state.debut;
            }
        }
        else{
            console.log("tsy mety");
            event.target.value = this.state.debut;
        }
    }
    handleFinChange=(event)=>{
        if(new Date(event.target.value).getTime()>=new Date(this.state.debut).getTime() || this.state.debut==="")
            this.setState({fin:event.target.value});
        else{
            console.log("tsy mety");
            event.target.value = this.state.fin;
        }
    }
    handleMotifChange=(event)=>{
        this.setState({motif:event.target.value});
    }
    sendData = (url) =>{
        console.log(this.state);
        console.log(JSON.stringify(this.state));
        fetch(url+"?data="+JSON.stringify(this.state), {method: 'GET', headers:{}
        });
        console.log(url+"?data="+JSON.stringify(this.state));
    }
    handleClick = ()=>{
        this.sendData(URLHelper.urlgen("receiveDemandeConge.php"));
    }
    render() { 
        return (
            <React.Fragment>
                <table style={{width:"400px", margin: "auto"}}>
                    <thead>
                        <tr>
                            <th colSpan={2}>Demande de conge</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Date debut</td>
                            <td>
                                <input style={this.style} type="date" onChange={this.handleDebChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>Date fin</td>
                            <td>
                                <input style={this.style} type="date" onChange={this.handleFinChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td>Motif</td>
                            <td>
                                <input style={this.style} type="text" onChange={this.handleMotifChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <button disabled={this.check()} className="btn btn-success" onClick={this.handleClick}>Valider</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}
 
export default DemandeConge;