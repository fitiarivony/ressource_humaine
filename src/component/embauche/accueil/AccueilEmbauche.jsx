import React, { Component } from 'react'
import "./assets/css/style.css"
import "./assets/css/responsive.css"
import collabs from "./assets/images/slider-img.png"
import { Link } from 'react-router-dom'

class Accueil extends Component {
  state = {  } 
  render() { 
    return (

<div className="hero_area">
<header className="header_section">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-8">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <a className="navbar-brand" href="index.html">
            <span>
              BigWing
            </span>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex  flex-column flex-lg-row align-items-center">
              <ul className="navbar-nav  ">
                <li className="nav-item active">
                  <Link className="nav-link" to="/recrutement_done">Embaucher un employer</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/insertsm">Insérer les sma et sme</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/updatesm">Mettre à jour les sma et sme</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/recrutement_done">Générer un formulaire</Link>
                </li>
              
              
              </ul>
              
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</header>

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

