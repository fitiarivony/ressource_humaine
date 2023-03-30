import React, { Component } from 'react'
import "./assets/css/style.css"
import "./assets/css/responsive.css"
import { Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
class NavEmbauche extends Component {
  render() {
    return (
        <div className="col-lg-8">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex  flex-column flex-lg-row align-items-center">
              <ul className="navbar-nav  ">
                <li className="nav-item active">
                  <Link className="nav-link" to="/recrutement_done">Embaucher un employer</Link>
                </li>
               
                <div className="dropdown">
  <button className="nav-link dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
   Générer un formulaire
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
  <li className="nav-item"><Link  to="/listenocontr?type=cdd">CDD</Link></li>
  <li className="nav-item"><Link to="/listenocontr?type=cdi">CDI</Link></li>
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

    );
  }
  
}
export default NavEmbauche;