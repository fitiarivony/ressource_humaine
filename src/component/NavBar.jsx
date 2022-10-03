import React, { Component } from 'react';
import '../assets/layout/styles/layout.css'
import {Link} from 'react-router-dom'
class NavBar extends Component {
    state = {  } 
    render() { 
        return (
    
    <header id="header" className="hoc clear"> 
      <div id="logo" className="fl_left">
        <h1><a href="index.html">E-RH</a></h1>
      </div>
      <nav id="mainav" className="fl_right">
        <ul className="clear">
          <li className="active"><a href="/mainAdmin">Home</a></li>
          <li>Selection de dossier
            <ul>
              <li><Link to="/recrnoceff">Coefficient</Link></li>
              <li><Link to="/listCandidature">Note</Link></li>
            
            </ul>
          </li>

         
        </ul>
      </nav>
    </header>
        );
    }
}
 
export default NavBar;