import '../assets/dist/css/bootstrap.min.css'
import '../assets/css/TableList.css'
import React, { Component } from 'react'
import URLHelper from '../Helper/URLHelper';
import {Link}  from 'react-router-dom';

class  RecrutementDone extends Component  {
    state = {
        recrutement:[]
    }
    constructor (){
        super();
        this.initialize();
    }
    initialize=() => {
        let url="saisiecoefficient/get_not_coeff.php";
        this.fillStats(URLHelper.urlgen(url));
    }

    fillStats=(url)=>{
        fetch(url,{crossDomain:true,method:'GET',headers:{}})
        .then(res=>{return res.json() ; })
        .then(data=>{ 
           // console.log(data);
            this.setState({recrutement:data});
         })
        //  console.log(this.state);
    }
    

render() {

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-4">

               
  <h2>Recrutement terminé</h2>

</div>
                <div className="col-md-3"></div>
            </div>
            <br />
<br />
<hr />        
                                        <div className="container">
                                           
                                               
                                                    <table className="table table-striped  table-bordered">
                                                        <thead>
                                                           
                                                            <th >numero recrutement</th>
                                                            <th >Nom poste</th>
                                                            <th></th>
                                                           
                                                        </thead>
                                                        <tbody>
                        
                                                            {this.state.recrutement.map((td => 
                                                                <tr>
                                                                   <td>{td.idrecrutement}</td>
                                                                   <td>{td.nomposte}</td>
                                                                   
                                                                   <td><Link to={"/coeff/"+td.idrecrutement} >Enregistrer les coefficients</Link> </td>
                                                                </tr>    
                                                            ))}
                                                        </tbody>
                                                    </table>
                                              
                                            
                        
                        
                                        </div>
                                
                                </div>

    );
}
}
export default RecrutementDone