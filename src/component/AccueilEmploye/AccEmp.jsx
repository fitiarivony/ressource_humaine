import React, { Component } from 'react'
import "./css/bootstrap.min.css"
import "./css/style.css"
import "./css/responsive.css"
import {Link} from 'react-router-dom'
class AccEmp extends Component {
   state = {  } 
   
   render() { 
      return (

         <div  className="head_top">
            <div className="header">
               <div className="container-fluid">
                  <div className="row">
                     <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                        <div className="full">
                           <div className="center-desk">
                             
                           </div>
                        </div>
                     </div>
                     
                  </div>
               </div>
            </div>
            <section className="banner_main">
               <div className="container">
                  
                  <div class="page-header">
                    <h1>Bienvenue,  </h1>
                  </div>
                  
                  <div className="row d_flex">
                     <div className=" col-xl-8 col-lg-8 col-md-8 col-12-9">
                        <div className="text" >
                           
                        <div className="alert alert-primary" role="alert">
                        <p><Link to="/askconge" >Demander un conge</Link></p>
                       
</div>
<div class="alert alert-danger" role="alert">
<p><Link   onClick={()=>{localStorage.removeItem("idemploye")}} to="/" >Deconnexion</Link></p>
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
 
export default AccEmp;

     
     
      
 

