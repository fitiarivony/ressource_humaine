import React, { Component }from "react";
import "./assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "./assets/vendor/animate/animate.css";
import "./assets/vendor/css-hamburgers/hamburgers.min.css";
import "./assets/vendor/select2/select2.min.css";
import "./assets/css/util.css";
import "./assets/css/main.css";
import {Link} from 'react-router-dom';
import URLHelper from "../Helper/URLHelper";
export default class Login extends Component{
    state = {
        email: "",
        password:"",
        message:""
    };
    getmessage=(data)=>{
        if(data.message!=null){
            this.setState({message:data.message});
            console.log(data.message);
        }else{
            localStorage.setItem("user",data.idcandidat);
            window.location.href="/home";
            console.log(localStorage.getItem());
        }
        return true;
    }

    handleSumbit=(event)=>{
        event.preventDefault();
        const alefa={
            "email":this.state.email,
            "password":this.state.password
        };
        
        this.request(URLHelper.urlgen("candidat/logincandidat.php?q="+JSON.stringify(alefa),this.getmessage));
    }

    handleEmail=(event)=>{
        const value=event.currentTarget.value;
        this.setState({email:value});
    }
    handlePass=(event)=>{
        const value=event.currentTarget.value;
        this.setState({password:value});
    }

    
    request=(url,envoye,act)=>{
        fetch(url,{
            crossDomain:true,
            method: 'GET',
            headers: {},
        }).then(response=>{return response.json()})
        .then((data)=>{this.getmessage(data)});
    }


    render() {
        return (
            <>
            <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <div className="login100-pic js-tilt" data-tilt>
                        <img src="../assets/images/img-01.png" alt="IMG"/>
                    </div>
    
                    <form className="login100-form validate-form" onSubmit={this.handleSumbit}>
                        <span className="login100-form-title">
                            Member Login
                        </span>
    
                        <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                            <input onChange={this.handleEmail} value={this.state.email} className="input100" type="text" name="email" placeholder="Email"/>
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                            </span>
                        </div>
    
                        <div className="wrap-input100 validate-input" data-validate="Password is required">
                            <input onChange={this.handlePass} value={this.state.password} className="input100" type="password" name="pass" placeholder="Password"/>
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                                <i className="fa fa-lock" aria-hidden="true"></i>
                            </span>
                        </div>
                        <div>
                            <p className="text-danger text-center">{this.state.message}</p>
                        </div>
                        <div className="container-login100-form-btn">
                            <button className="login100-form-btn" type="submit">
                                Login
                            </button>
                        </div>
    
                        <div className="text-center p-t-12">
                            <span className="txt1">
                                Forgot
                            </span>
                            <Link className="txt2" to="/forgetpass">
                                Username / Password?
                            </Link>
                        </div>
    
                        <div className="text-center p-t-136">
                            <Link className="txt2" to="/createaccount">
                                Create your Account
                                <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    
    <script src="../assets/vendor/jquery/jquery-3.2.1.min.js"></script>
    
    <script src="../assets/vendor/bootstrap/js/popper.js"></script>
    <script src="../assets/vendor/bootstrap/js/bootstrap.min.js"></script>
    
    <script src="../assets/vendor/select2/select2.min.js"></script>
    
    <script src="../assets/vendor/tilt/tilt.jquery.min.js"></script>
    <script src="../assets/js/main.js"></script>
        </>
        );
    }
}