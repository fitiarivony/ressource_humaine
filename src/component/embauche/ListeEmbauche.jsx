import './../../assets/dist/css/bootstrap.min.css'
import './../../assets/css/TableList.css'
import React, { Component } from 'react'
import URLHelper from './../../Helper/URLHelper';
import {Link}  from 'react-router-dom';

class  ListeEmbauche extends Component  {
    state = {
        embauche:[]
    }
    constructor (){
        super();
        this.initialize();
    }
    initialize=() => {
        const params = new URLSearchParams(window.location.search);
        let data=params.get("idrecrutement");
        let url="classEmbauche/trait/candidat_admis.php?idrecrutement="+data;
        this.fillStats(URLHelper.urlgen(url));
    }

    fillStats=(url)=>{
        fetch(url,{crossDomain:true,method:'GET',headers:{}})
        .then(res=>{return res.json() ; })
        .then(data=>{ 
           // console.log(data);
            this.setState({embauche:data});
         })
        //  console.log(this.state);
    }
    

render() {

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-4">

               
  <h2>Candidat Embauché</h2>

</div>
                <div className="col-md-3"></div>
            </div>
            <br />
<br />
<hr />
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                <div className="container">
                                        
                                        <div className="title-card card-header py-3">
                                            <p className="text m-0 fw-bold">Candidat Embauché</p>
                                        </div>
                                
                                        <div className="container">
                                            <div >
                                                <div className="table-responsive">
                                                    <table className="table table-striped table-bordered">
                                                        <thead>
                                                            <tr>
                                                            <th scope="col">Numero candidat</th>
                                                            <th scope="col">Nom</th>
                                                            <th scope="col">Prenom</th>
                                                            <th scope="col"></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                        
                                                            {this.state.embauche.map((td => 
                                                                <tr>
                                                                   <td>{td.idcandidat}</td>
                                                                   <td>{td.nom}</td>
                                                                   <td>{td.prenom}</td>
                                                                   <td><Link to={"/embauche?idcandidat="+td.idcandidat+"&&idrecrutement="+td.idrecrutement}>Embaucher</Link> </td>
                                                                </tr>    
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                        
                        
                                        </div>
                                
                                </div>





                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
        
    );
}
}
export default ListeEmbauche