import React, { Component } from 'react';
import URLHelper from '../../Helper/URLHelper';
class Embauche extends Component {
    state = { 
        info:{},
        dept:[],
        fonction:[],
        superieur:[],

        function:"",
        iddept:"",
        idemploye:'',
        sb:0,
        
     } 
    constructor (){
        super();
        this.getInfo();
        this.getDept();
        this.getFonction();
    }
    //web service
    getInfo=() => {
        const params = new URLSearchParams(window.location.search);
        let data=params.get("idrecrutement");
        let data1=params.get("idcandidat");
        let url="classEmbauche/trait/get_info.php?idrecrutement="+data+"&&idcandidat="+data1;
        this.getURLInfo(URLHelper.urlgen(url));
    }

    getURLInfo=(url)=>{
        fetch(url,{crossDomain:true,method:'GET',headers:{}})
        .then(res=>{return res.json() ; })
        .then(data=>{ 
            this.setState({info:data});
    
         });
        
    }

    getDept=() => {
        let url="classEmbauche/trait/get_dept.php";
        this.getURLDept(URLHelper.urlgen(url));
    }

    getURLDept=(url)=>{
        fetch(url,{crossDomain:true,method:'GET',headers:{}})
        .then(res=>{return res.json() ; })
        .then(data=>{ 
            this.setState({dept:data});
         });
    }

    getFonction=() => {
        let url="classEmbauche/trait/get_fonctions.php";
        this.getURLFonction(URLHelper.urlgen(url));
    }

    getURLFonction=(url)=>{
        fetch(url,{crossDomain:true,method:'GET',headers:{}})
        .then(res=>{return res.json() ; })
        .then(data=>{ 
            this.setState({fonction:data});
          
         })
     
    }

    getSuperieur=()=>{
        let url="classEmbauche/trait/get_superieur.php?iddept="+this.state.iddept+"&&idfonction="+this.state.function;
        this.getURLSuperieur(URLHelper.urlgen(url));
    }


    getURLSuperieur=(url)=>{
        fetch(url,{crossDomain:true,method:'GET',headers:{}})
        .then(res=>{return res.json() ; })
        .then(data=>{ 
            this.setState({superieur:data});
         })
        
    }

    getInsert=(information)=>{
        const params = new URLSearchParams(window.location.search);
        let data2=params.get("idrecrutement");
        let data1=params.get("idcandidat");
        let url="classEmbauche/trait/insert_employe.php?idrecrutement="+data2+"&&idcandidat="+data1+"&&information="+information;
        this.getURLInsert(URLHelper.urlgen(url));
    }
    getURLInsert=(url)=>{
        fetch(url,{crossDomain:true,method:'GET',headers:{}})
        .then(res=>{return res.json() ; })
        .then(data=>{ 
            console.log(data);
          
         });
    }

    //change
    handleChange=(event)=>{
        if(event.target.name==="departement"){
            this.setState({iddept:event.target.value})
        }
        if(event.target.name==="function"){
            //console.log(event.target.value);
            this.setState({function:event.target.value})
        }
        if (event.target.name==="sb") {
            if(!isNaN(event.target.value)){
                this.setState({sb:event.target.value});
            }
        }
        if (event.target.name==="superieur") {
            this.setState({idemploye:event.target.value})
        }

       
    } 

    handleSubmit=(event) => {
        event.preventDefault();
        let employe={
            "debany":this.state.idemploye,
            "idfonction":this.state.function,
            "iddept":this.state.iddept,
            "salairebase":this.state.sb,
        };
        this.getInsert(JSON.stringify(employe));

    }

    refresh(){
        // console.log(this.state.iddept,"    ",this.state.function);
        if(this.state.iddept!=="" && this.state.function!==""){
            this.getSuperieur();
        }
      
    }   

    render() { 
        return (

            <div className="container">
        
    
            <center><div class="card shadow mb-3">
                
                <div class="title-card card-header">
                    <h2>Insertion des SME et SMA</h2>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div class="row card-body">
                        <div class="col">
                            
                            <p>Nom :{this.state.info.nom}</p>
                            <p>Prenom :{this.state.info.prenom}</p>
                            <p>Adresse :{this.state.info.adresse}</p>
                            <p>Situation juridique :{this.state.info.situation}</p>
                            <p>Genre :{this.state.info.genre}</p>
                        </div>
                        <div class="col">
                            <p>Fonction : <select  value={this.state.function} onChange={this.handleChange} name="function" class="form-control" required>
                            <option value="">Choix...</option>
                                {this.state.fonction.map((func)=>
                                <option value={func.idfonction}>{func.nomfonction}</option>
                                )}
                            </select>
                            </p>
                            
                            <p>Departement : <select  value={this.state.iddept} onChange={this.handleChange} name="departement" class="form-control" required>
                            <option value="">Choix...</option>
                                {this.state.dept.map((depart)=>
                                    <option value={depart.iddept}>{depart.nomdept}</option>
                                )}
                                
                            </select></p>
                            <p>Superieure : <input list="superieur" onRefresh={this.refresh()} class="form-control" name="superieur" onChange={this.handleChange} required/></p>
                            <datalist id="superieur">
{this.state.superieur.map((cate)=>
                         <option    value={cate.idemploye}>{cate.nom} {cate.prenom}</option>
                        )}
</datalist> 
            
                            <p>Salaire de base : <input type="text" name="sb" value={this.state.sb} onChange={this.handleChange} class="form-control" required/></p>
        
                            <button class="btn ">Enregistrer</button>    
                        </div>
        
                    </div>
                </form>
            </div></center>
            </div>
        );
    }
}
 
export default Embauche;
