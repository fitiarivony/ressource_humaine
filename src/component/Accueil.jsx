import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/templatemo-breezed.css';
import imageSource from '../assets/images/admin.png';
class Accueil extends Component {
    state = {  } 
    render() { 
        return (
            <div className="main-banner header-text" id="top">
        
        <div className="Modern-Slider">
          
          
          <div className="item">
           
            <div className="img-fill">
                <img src={imageSource} style={{float:"left"}}/> 
               
            </div>
            <div className="text-content" style={{float:"right"}}>
               
                <h5>Bienvenue!!!</h5>
                <Link to="/mainClient" className="main-stroked-button">Client</Link>
                <Link to="/logAdmin" className="main-stroked-button">Administrateur</Link>
              </div>
           
          </div>
        </div>
    </div>
            // <div className="row" style={this.styleban}>
            //     <div className="col-xs-10 col-md-6 col-xxl-6 col-xl-6"><Link to="/mainClient"><button className="btn btn-primary" type="button" style={this.style} >Client</button>
            //     </Link></div>
            //     <div className="col-xs-10 col-md-6 col-xxl-6 col-xl-6"><a href="/mainAdmin"><button className="btn btn-primary" type="button" style={this.style} >Administrateur</button>
            //     </a></div>      
            // </div>
        );
    }
}
 
export default Accueil;