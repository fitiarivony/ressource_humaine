import React, { Component } from 'react';
import URLHelper from '../Helper/URLHelper';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
class ListeRecrutement extends Component {
    state = {
        tab:[
    { 
        idrecrutement: '',
        iddept:'',
        nomposte:'',
        infoposte:'',
        requis:'',
        nomdept:''
    }
    ]}
    style={
        textDecoration: 'none',
        color: 'rgb(46,75,160)',
    }
    callchamp = () =>{
        this.askAnnee(URLHelper.urlgen("annonce/selectall.php"));
    }
    askAnnee=(url)=>{
        fetch(url,{crossDomain:true,method:'GET',headers:{}})
        .then(res=>{return res.json() ; })
        .then(data=>{ 
            // console.log(data);
            this.setState({tab:data});
         })
    }
    constructor () {
        super();
        this.callchamp();
    }
    render() { 
        return (
            <div className="row">
                { this.state.tab.map(champ=>
                <div className='card col '>
                <div className="row">
                <div className="title-card card-header py-3">
                    <center><p className="text m-0 fw-bold">{champ.nomdept}</p></center>
                </div>

                <div className="card-body ">
                    <center>
                    <h4 className="fw-bold">recherche {champ.nomposte} </h4>
                    <br />

                    <ul className="list-group">
  <li className="list-group-item list-group-item-secondary"  ><Link to={"/coeff/"+champ.idrecrutement}  style={this.style}>Donner les coefficients</Link></li>
  <li className="list-group-item list-group-item-secondary"><Link to={"/listCandidature?id="+champ.idrecrutement}  style={this.style}>Noter les dossiers déposer</Link> </li>
  
  <li className="list-group-item list-group-item-secondary"><Link to={"/question?idrecrutement="+champ.idrecrutement}  style={this.style}>Creer les tests</Link></li>
  <li className="list-group-item list-group-item-secondary"><Link to={"/go_to_evaluate?idrecrutement="+champ.idrecrutement}  style={this.style}>Noter les tests</Link> </li>
  <li className="list-group-item list-group-item-secondary"><Link to={"/init?id="+champ.idrecrutement}  style={this.style}>Generer les rdv</Link></li>
  <li className="list-group-item list-group-item-secondary"><Link to={"/rdent?id="+champ.idrecrutement}  style={this.style}>Voir les rdv</Link> </li>
  <li className="list-group-item list-group-item-secondary"><Link to={"/rdfini?id="+champ.idrecrutement}  style={this.style}>Voir les rdv finis</Link></li>
</ul>
                    </center>
                </div>
                </div>

                </div>
                    
                        )} 
                        </div>
        );
    }
}
 
export default ListeRecrutement;