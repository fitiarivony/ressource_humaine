import React, { Component } from "react";
import {Link} from "react-router-dom";
import URLHelper from "./Helper/URLHelper";
class Home extends Component {
    state= {
        info:[],
    }
    constructor(){
        super();
        this.getInfo();
    }
    getInfo=() => {
       
        let url="fillTest/get_recrut_notest.php?idcandidat="+localStorage.getItem("user");
        this.getURLInfo(URLHelper.urlgen(url));
    }

    getURLInfo=(url)=>{
        fetch(url,{crossDomain:true,method:'GET',headers:{}})
        .then(res=>{return res.json() ; })
        .then(data=>{ 
            this.setState({info:data});
    
         });
        
    }
    render() { 
        return(
            <div className="App">
                {localStorage.getItem("user")}
           
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
                  
                  <div className="page-header">
                    <h1>Bienvenue,  </h1>
                  </div>
                  
                  <div className="row d_flex">
                     <div className=" col-xl-8 col-lg-8 col-md-8 col-12-9">
                        <div className="text" >
                            {this.state.info.map((info) =>
                            <div className="alert alert-primary" role="alert">
                            <p><Link to={"/test?idcandidat="+localStorage.getItem("user")+"&&idrecrutement="+info.idrecrutement} >Passer au test du recrutement n°{info.idrecrutement} </Link></p>
                           </div>
                            )}


<div className="alert alert-danger" role="alert">
<p><Link   onClick={()=>{localStorage.removeItem("user")}} to="/" >Deconnexion</Link></p>
</div>
                       
                           
                        </div>
                     </div>
                    
                  </div>
               </div>
            </section>
         </div>
       

        </div>
        );
    }
}
export default Home;