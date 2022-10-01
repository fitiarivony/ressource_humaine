import React, { Component } from 'react';
import URLHelper from '../Helper/URLHelper';
import { Link } from 'react-router-dom';
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
        color: 'white',
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
                <div className='card col-3 mb-3 '>
                <div className="row">
                <div className="title-card card-header py-3">
                    <center><p className="text m-0 fw-bold">{champ.nomdept}</p></center>
                </div>

                <div className="card-body ">
                    <center>
                    <h4 className="fw-bold">recherche {champ.nomposte} </h4>
                    <br />

                    <p><button className="btn btn-primary"><Link to={"/coeff/"+champ.idrecrutement}  style={this.style}>Donner les coefficients</Link></button> </p>
                    <p><button className="btn btn-primary"><Link to={"/listCandidature?id="+champ.idrecrutement}  style={this.style}>Noter les dossiers déposer</Link></button> </p>
                    <p><button className="btn btn-primary"><Link to={"/listCandidature?id="+champ.idrecrutement}  style={this.style}>Creer les tests</Link></button> </p>
                    <p><button className="btn btn-primary"><Link to={"/init?id="+champ.idrecrutement}  style={this.style}>Generer les rdv</Link></button> </p>
                    <p><button className="btn btn-primary"><Link to={"/rdent?id="+champ.idrecrutement}  style={this.style}>Voir les rdv</Link></button> </p>
                    <p><button className="btn btn-primary"><Link to={"/rdfini?id="+champ.idrecrutement}  style={this.style}>Voir les rdv finis</Link></button> </p></center>
                </div>
                </div>

                </div>
                    
                        )} 
                        </div>
        );
    }
}
 
export default ListeRecrutement;