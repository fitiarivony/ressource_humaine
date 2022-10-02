import React, { Component } from 'react';
import '../assets/layout/styles/layout.css'
import {Link} from 'react-router-dom'
class NavBar extends Component {
    state = {  } 
    render() { 
        return (
    
    <header id="header" className="hoc clear"> 
      <div id="logo" className="fl_left">
        <h1><a href="index.html">Yoffa</a></h1>
      </div>
      <nav id="mainav" className="fl_right">
        <ul className="clear">
          <li className="active"><a href="index.html">Home</a></li>
          <li><a className="drop" href="/t">Selection de dossier</a>
            <ul>
              <li><Link to="/recrnoceff">Coefficient</Link></li>
              <li><Link to="/listCandidature">Note</Link></li>
              <li><a href="pages/sidebar-left.html">Sidebar Left</a></li>
              <li><a href="pages/sidebar-right.html">Sidebar Right</a></li>
              <li><a href="pages/basic-grid.html">Basic Grid</a></li>
            </ul>
          </li>
          <li><a className="drop" href="/t">Dropdown</a>
            <ul>
              <li><a href="/">Level 2</a></li>
              <li><a className="drop" href="/">Level 2 + Drop</a>
                <ul>
                  <li><a href="/">Level 3</a></li>
                  <li><a href="/">Level 3</a></li>
                  <li><a href="/">Level 3</a></li>
                </ul>
              </li>
              <li><a href="/">Level 2</a></li>
            </ul>
          </li>
          <li><a href="/">Link Text</a></li>
          <li><a href="/">Link Text</a></li>
        </ul>
      </nav>
    </header>
        );
    }
}
 
export default NavBar;