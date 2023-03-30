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
            <div class="alert alert-primary" role="alert">
            <Link to="/stats" >Statistique</Link>
</div>
<div class="alert alert-primary" role="alert">
<Link to="/organiseRdv" >Organiser Rendez-vous</Link>
</div>

           
            </div>
           
            </React.Fragment>
        );
    }
}
 
export default MainAdmin;