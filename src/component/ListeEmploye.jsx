import React, { Component } from 'react';
import URLHelper from '../Helper/URLHelper';
import { Link } from 'react-router-dom';
class ListeCandidature extends Component {
    state = { 
        liste:{
            lsCand:[{}]
        }
    }
    initialize =()=> {
        const params = new URLSearchParams(window.location.search);
        let data=params.get("id");
        this.askService(URLHelper.urlgen("getCandidat.php?idrecrut="+data));
    }
    askService = (url) => {
        fetch(url,{crossDomain:true,method:'GET', headers: {}})
        .then(res => { return res.json();})
        .then(data=>{
            console.log(data);
            this.setState(
                {
                    liste: data
                }
            )
        })
    } 
    constructor () {
        super();
        this.initialize();
    } 
    render() { 
        return (
            <React.Fragment>
                <table>
                    <thead>
                        <tr>
                            <th>idCandidat</th>
                            <th>Nom</th>
                            <th>Prenom</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.liste.lsCand.map(cand=>
                    <tr>
                        <td>{cand.idcandidat}</td>
                        <td>{cand.nom}</td>
                        <td>{cand.prenom}</td>
                        <td><Link to={"/noteform?idc="+cand.idcandidat+"&idr="+cand.idrecrutement}><button className="btn btn-success">Assigner Note</button></Link></td>
                    </tr>
                    )}
                        
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}
 
export default ListeCandidature;