import React, { Component } from 'react';
import URLHelper from '../Helper/URLHelper';
import RdvMitokana from './RdvMitokana';
class ListeRdvFini extends Component {
    initialize =()=> {
        const params = new URLSearchParams(window.location.search);
        let data=params.get("id");
        this.askService(URLHelper.urlgen("listeRdvFait.php?id="+data));
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
    state = {
        rdvs:[]
    }
    constructor () {
        super();
        this.initialize();
    }
    style = {
        textAlign: 'center'
    }
    render() { 
        return (  <div className="card shadow mb-3">
                                        
        <div className="title-card card-header py-3">
            <p className="text m-0 fw-bold">{this.props.title}</p>
        </div>
    
        <div className="card-body">
            <div className="d-flex flex-column flex-shrink-0">
                <div className="table-responsive">
                    <table className="table table-striped table-sm" style={this.style}>
                        <thead>
                            <tr>
                                <th>Candidat</th>
                                <th>Heure RDV</th>
                                <th>Bureau</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.state.rdvs.map(rdv => <tr><RdvMitokana 
                                candidat={rdv.candidat} 
                                heure={rdv.date} 
                                bureau={rdv.bureau}
                                
                                />
                                <td>
                                    {rdv.noty}
                                </td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    );
        
    }
}
 
export default ListeRdvFini;