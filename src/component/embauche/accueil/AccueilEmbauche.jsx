import React, { Component } from 'react'
import "./assets/css/style.css"
import "./assets/css/responsive.css"
import collabs from "./assets/images/slider-img.png"
import { Link } from 'react-router-dom'
import URLHelper from '../../../Helper/URLHelper'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
class Accueil extends Component {
  state = { 
    cnaps:[],
    motif:"",
   } 
  constructor(){
    super();
    this.getNotif();
    
  }

  getNotif=() => {
   
    let url="classEmbauche/trait/send_notif.php";
    this.getURLNotif(URLHelper.urlgen(url));
}

getURLNotif=(url)=>{
    fetch(url,{crossDomain:true,method:'GET',headers:{}})
    .then(res=>{return res.json() ; })
    .then(data=>{ 
     
        this.setState({cnaps:data});
        if(data.length>0){
          this.isThere_notif();
        }
     });
    
}

assign=(idemploye) => {
   
  let url="classEmbauche/trait/affilier_cnaps.php?idemploye="+idemploye;
  console.log(URLHelper.urlgen(url));
  this.getURLassign(URLHelper.urlgen(url));
  
}

getURLassign=(url)=>{
  fetch(url,{crossDomain:true,method:'GET',headers:{}});
  // window.location.replace("/");
  // document.getElementById('staticBackdrop').hide();

}

insertmotif=(idemploye) => {
   
  let url="classEmbauche/trait/insert_motif.php?idemploye="+idemploye+"&&motif="+this.state.motif;
  console.log(URLHelper.urlgen(url));
  this.getURLmotif(URLHelper.urlgen(url));
  window.location.replace("/accueilembauche");
}

getURLmotif=(url)=>{
  fetch(url,{crossDomain:true,method:'GET',headers:{}});
}


isThere_notif(){

      document.getElementById('tsindrio').click();
}
handleChange=(event) => {
  this.setState({motif:event.target.value})
}

  render() { 
    return (

<div className="hero_area">
<header className="header_section">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-8">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          
         
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex  flex-column flex-lg-row align-items-center">
              <ul className="navbar-nav  ">
                <li className="nav-item"><Link className="nav-link" to="/recrutement_done">Embaucher un employer</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/planning">Planning congé</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/compteconge">Comptage de congé</Link></li>
               
               
                <div className="dropdown">
  <button className="nav-link dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
   Générer un formulaire
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
  <li className="nav-item"><Link  to="/listenocontr?type=Contrat d essai">Contrat d'essai</Link></li>
  <li className="nav-item"><Link  to="/listenocontr?type=CDD">CDD</Link></li>
  <li className="nav-item"><Link to="/listenocontr?type=CDI">CDI</Link></li>
  </ul>
</div>

              <div className="dropdown">
  <button className="nav-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
   SMA et SME
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
  <li className="nav-item"><Link to="/insertsm">Insertion</Link></li>
  <li className="nav-item"><Link to="/updatesm">Mis à jour</Link></li>
  </ul>
</div>
              
              </ul>
              
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</header>

<button id="tsindrio" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
</button>

<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">Notifications</h5>
       
      </div>
      <div className="modal-body">
        Vous avez oublié d'affilier à la cnaps l'employe:
        
        <table class="table table-hover ">
          
            <tr>
              <th>Nom</th>
              <th>Prenom</th>
              <th>Retard</th>
              <th></th>
              <th></th>
             
            </tr>
         
          <tbody>
          {this.state.cnaps.map((cnap)=>
           <tr>
           <td>{cnap.nom}</td>
           <td>{cnap.prenom}</td>
           <td>{cnap.trunc-2} semaines</td>
           <td><Link className="btn btn-success" onClick={() =>{
              this.assign(cnap.idemploye) }} >Assigner</Link></td>
           <td>< input value={this.state.motif} onChange={this.handleChange} type="text" className="form-control" placeholder="Motif"/>
           <Link  className="btn btn-success" onClick={()=>{this.insertmotif(cnap.idemploye)}} >Donner un motif</Link></td>
         </tr>
        )}
           
          </tbody>
        </table>
        
       
      </div>
     
    </div>
  </div>
</div>


<section className=" slider_section ">
  <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <div className="slider_detail-box">
                <h1>
                 Votre application<br/>
                qui vous aide <br/>
                  à gérer les embauches
                </h1>
              
                
              </div>
            </div>
            <div className="col-md-6">
              <div className="slider_img-box">
                <img src={collabs} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      
    </div>
    </section> 
  </div>





    );
  }
}
 
export default Accueil;

