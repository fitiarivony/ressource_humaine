import React, { Component } from 'react';
import URLHelper from '../Helper/URLHelper';
class StatRdv extends Component {
    initialize =()=> {
        this.askService(URLHelper.urlgen("statRdv.php"));
    }
    askService = (url) => {
        fetch(url,{crossDomain:true,method:'GET', headers: {}})
        .then(res => { return res.json();})
        .then(data=>{
            console.log(data);
            this.setState(
                {
                    appt: data
                }
            )
        })
    }
    state = { 
        appt:{
            moyennes:[{}]
        }
    }
    constructor () {
        super();
        this.initialize();
    } 
    render() { 
        return (
            <React.Fragment>
                <h3>Statistique des rendez-vous</h3>
                <table>
                    <thead>
                        <tr>
                            <th>idRecrutement</th>
                            <th>NomPoste</th>
                            <th>Moyenne</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                    {this.state.appt.moyennes.map(moy=>
                    <tr>
                        <td>{moy.idrecrutement}</td>
                        <td>{moy.nomposte}</td>
                        <td>{moy.moyenne}</td>
                    </tr>
                        )}
                        
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}
 
export default StatRdv;