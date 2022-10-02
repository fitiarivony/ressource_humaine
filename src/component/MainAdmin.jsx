import React, { Component } from 'react';
// import URLHelper from '../Helper/URLHelper';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
class MainAdmin extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
            <NavBar></NavBar>
            <div className="container">
            <Link to="/stats" ><button className="btn btn-secondary">Statistique</button></Link>
            <Link to="/organiseRdv" ><button className="btn btn-secondary">Organiser Rendez-vous</button></Link>
            </div>
           
            </React.Fragment>
        );
    }
}
 
export default MainAdmin;