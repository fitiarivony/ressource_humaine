import { Component } from "react";
import URLHelper from "../../Helper/URLHelper";
import "./../../assets/css/LoginAdmin.css"
import imageSource from './../../assets/img/admin.png'

class LoginEmploye extends Component{
    state={
        numero:"",
    }
    handleChange=(event) => {
        // console.log(event.target.value);
           this.setState({numero:event.target.value});
        
       
        // this.setState()
    };
     
    handleSubmit=(event) => {
        event.preventDefault();
        this.callchamp();
        
    }
    callchamp= () =>{
        console.log(URLHelper.urlgen("classEmbauche/trait/logEmploye.php?idemploye="+this.state.numero));
        this.askAnnee(URLHelper.urlgen("classEmbauche/trait/logEmploye.php?idemploye="+this.state.numero))
    }
        askAnnee=(url)=>{
            // const navigate = useNavigate();
            
        fetch(url,{crossDomain:true,method:'GET',headers:{}})
        .then(res=>{return res.json() ; })
        .then(data=>{ 
            console.log(data.etat);
            if (data.etat) {
            //   navigate("/");
            localStorage.setItem("idemploye",this.state.numero);
            //  this.context.router.push("/test");
             window.location.replace("/accemp")  
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
                                Veuillez inserer votre numero employer
                            </span>

                            <div className="wrap-input100 validate-input" data-validate = "Admin's name is required">
                                <input className="input100" type="text" value={this.state.numero} onChange={this.handleChange} name="numero" placeholder="numero" />
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

export default LoginEmploye