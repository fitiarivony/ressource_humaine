
import React, { Component } from 'react';
import URLHelper from "../../Helper/URLHelper";
class Comptage extends Component {
    state = {  
        info:[],
    } 
    constructor(){
        super();
        this.getConge();
    }
    getConge=() => {
        let url="Conge/trait.php";
        // console.log(URLHelper.urlgen(url));
        this.getURLConge(URLHelper.urlgen(url));
    }

    getURLConge=(url)=>{
        fetch(url,{crossDomain:true,method:'GET',headers:{}})
        .then(res=>{return res.json() ; })
        .then(data=>{ 
            // console.log(data);
            this.setState({info:data});
         });
    }
    render() { 
        return (
            <div className="container">
            <div className="title-card card-header py-3">
                <p className="text m-0 fw-bold">Comptage de conge</p>
            </div>
                                
            <div className="card-body">
                <div className="d-flex flex-column flex-shrink-0">
                    <div className="table-responsive">
                        <table className="table table-striped table-sm">
                           
                                <tr>
                                    <th scope="col">Nom de l'employe</th>
                                    <th scope="col">Prenom de l'employe</th>
                                    <th scope="col">Nombre de congés en jour</th>
                                    <th scope="col">Chiffre de salaire</th>
                                </tr>
                           
                            <tbody>
                                {this.state.info.map((employe)=>
                                    <tr>
                                        <td>{employe.nom}</td>
                                        <td>{employe.prenom}</td>
                                        <td>{employe.conge}</td>
                                        <td>{employe.chiffres}</td>
                                    </tr>
                                )}                 
                            </tbody>
                        </table>
                    </div>
                </div>        
            </div>
                                
        </div>


        );
    }
}
 
export default Comptage;

        

