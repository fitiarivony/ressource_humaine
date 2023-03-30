import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/tooplate-style.css"
import {Link} from 'react-router-dom'
class Option extends Component {
    
    render() { 
        return (
            <div className="container">
            <div className="wrap">
            <header id="header">
                <div className="container-fluid">
                    <div className="col-md-12">
                        <button id="primary-nav-button" type="button">Menu</button>
                       
                       
                    </div>
                </div>
            </header>
        </div>
    
    
        <div className="banner">
            <div className="container-fluid">
                <div className="row">
                <div className="col-md-5 col-sm-5 col-xs-12">
                    <div className="left-content">
                        <div className="inside-content">
                            <h4>Voir les détails sur les selections de dossiers,les tests et les entretiens</h4>
                            <div className="white-border-button">
                                <Link to="/mainAdmin">Voir plus</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 col-sm-2 col-xs-12">
                    <div className="center-image">
                        <div className="inside-content">
                        <div className="blue-border-button">
                                <Link className='btn btn-success' to="/">Deconnexion</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 col-sm-5 col-xs-12">
                    <div className="right-content">
                        <div className="owl-carousel owl-theme">
                            <div style={{"height": "600px"}}></div>
                            <div className="item">
                                <p>Voir les détails sur les embauches,les salaires minimum,les contrats et les congés</p>
                              
                            </div>
                            <div style={{"height": "50px"}}></div>
                            <div className="blue-border-button">
                                <Link to="/accueilembauche">Voir plus</Link>
                            </div>
                           
                           
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
     
        </div>


        );
    }
}
 
export default Option;
   