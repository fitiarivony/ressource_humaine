import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import URLHelper from './../../Helper/URLHelper';
class EmpNoContrat extends Component{
  state={
    info:[],
    type:"",
  } 
  constructor(){
    super();
   
    this.getInfo();
    // console.log(this.state.type);
    
  }
  getInfo=() => {
    

    let url="classEmbauche/trait/empnocontrat.php";
    this.getURLInfo(URLHelper.urlgen(url));
}

getURLInfo=(url)=>{
    fetch(url,{crossDomain:true,method:'GET',headers:{}})
    .then(res=>{return res.json() ; })
    .then(data=>{ 
        this.setState({info:data});
        const params = new URLSearchParams(window.location.search);
        this.setState({type:params.get("type")});
     });
    
}
render() {
    return(
        <div className="container">
                                        
                <div className="title-card card-header py-3">
                    <p className="text m-0 fw-bold">Generer un formulaire un {this.state.type} pour:</p>
                </div>
        
                <div className="card-body">
                    <div className="d-flex flex-column flex-shrink-0">
                        <div className="table-responsive">
                            <table className="table table-striped table-sm">
                                
                                    <tr>
                                    <th scope="col">numero employer</th>
                                    <th scope="col">Nom</th>
                                    <th scope="col">Prenom</th>
                                    <th></th>
                                    </tr>
                               
                                <tbody>
                                    {this.state.info.map((td => 
                                        <tr>
                                            <td>{td.idemploye}</td>
                                            <td>{td.nom}</td>
                                            <td>{td.prenom}</td>
                                            <td><Link to={"/"+ this.state.type+"?idemploye="+td.idemploye+"&&type="+this.state.type }>Générer le formulaire</Link></td>
                                        </tr>    
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>


                </div>
        
        </div>
    );
}
}
export default  EmpNoContrat;