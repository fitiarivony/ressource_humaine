import React, { Component } from 'react';
import URLHelper from './../../Helper/URLHelper';
import { Link } from 'react-router-dom';
class ListeRecr extends Component {
    state = { 
        liste:[]
    }
    initialize =()=> {
        const params = new URLSearchParams(window.location.search);
        let data=params.get("idrecrutement");
        console.log(URLHelper.urlgen("fillTest/get_test.php?idrecrutement="+data));
        this.askService(URLHelper.urlgen("fillTest/get_test.php?idrecrutement="+data));
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
                    {this.state.liste.map(cand=>
                    <tr>
                        <td>{cand.idcandidat}</td>
                        <td>{cand.nom}</td>
                        <td>{cand.prenom}</td>
                        <td><Link to={"/evaluer?idcandidat="+cand.idcandidat+"&idrecrutement="+cand.idrecrutement}><button className="btn btn-success">Evaluer</button></Link></td>
                    </tr>
                    )}
                        
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}
 
export default ListeRecr;