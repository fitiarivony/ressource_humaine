import React, { Component } from 'react';
import RdvMitokana from './RdvMitokana';
import './../assets/dist/css/bootstrap.min.css'
import './../assets/css/TableList.css'

class ListeRdvRO extends Component {
    initialize =()=> {
        this.askService("http://localhost/phpRH/listeRdvNonFait.php");
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
 
export default ListeRdvRO;