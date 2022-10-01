import { Component } from "react";
import URLHelper from "../Helper/URLHelper";
import "./../assets/css/LoginAdmin.css"
import imageSource from './../assets/img/admin.png'

class LoginAdmin extends Component{
    state={
        email:"",
        mdp:"",
    }
    handleChange=(event) => {
        // console.log(event.target.value);
        if (event.target.name==="email") {
           this.setState({email:event.target.value});
        }else if(event.target.name==="pass"){
            this.setState({mdp:event.target.value});
        }
       
        // this.setState()
    };
     
    handleSubmit=(event) => {
        event.preventDefault();
        this.callchamp();
        
    }
    callchamp= () =>{
        const sending={"identifiant":this.state.email,"mdp":this.state.mdp};
      
        this.askAnnee(URLHelper.urlgen("logAdmin/login.php?essai="+  JSON.stringify({"essai":sending})));
    }
        askAnnee=(url)=>{
            // const navigate = useNavigate();
            
        fetch(url,{crossDomain:true,method:'GET',headers:{}})
        .then(res=>{return res.json() ; })
        .then(data=>{ 
            console.log(data);
            if (data.etat) {
            //   navigate("/");
            //  this.context.router.push("/test");
             window.location.replace("http://localhost:3000/mainAdmin")  
            }else{
                alert("erreur");
                console.log("echec");
            }
         })
    }

 
    render(){
        return(

            <div className="limiter">

		        <div className="container-login100">
			        
                    <div className="wrap-login100">

                        <div className="login100-pic js-tilt" data-tilt>
                            <img src={imageSource} alt="IMG" />
                        </div>

                        <form className="login100-form validate-form" onSubmit={this.handleSubmit}>

                            <span className="login100-form-title">
                                Administrateur
                            </span>

                            <div className="wrap-input100 validate-input" data-validate = "Admin's name is required">
                                <input className="input100" type="text" value={this.state.email} onChange={this.handleChange} name="email" placeholder="Email" />
                                <span className="focus-input100"></span>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate = "Password is required">
                                <input className="input100" type="password" value={this.state.mdp} onChange={this.handleChange} name="pass" placeholder="Password" />
                                <span className="focus-input100"></span>
                            </div>
                            
                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn">
                                    Connexion
                                </button>
                            </div>

                        </form>
                </div>
            </div>
        </div>
        );
    }
}

export default LoginAdmin