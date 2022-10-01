import React, { Component } from 'react'
import URLHelper from '../../Helper/URLHelper';
import './assets/css/DemandeConge.css'
import './assets/dist/css/bootstrap.min.css'
class UpdateSMA extends Component {
    state = {
         categorie:[],
         catchoisie:{
            idcategorie:"",
            nomcategorie:"",
         },
         sma:"",
         sme:"",
      } 
      constructor() {
        super();
        this.initialize();
    }
    initialize=() => {
        this.getlist(URLHelper.urlgen("ClassEmbauche/trait/get_list_ready.php"));
    }
    sendinsert=()=>{
        let alefa={
            sme:this.state.sme,
            sma:this.state.sma,
            idcategorie:this.state.catchoisie.idcategorie,
        }
        let go=JSON.stringify(alefa);
        console.log(go);
        this.insertion(URLHelper.urlgen("ClassEmbauche/trait/update_sma.php?sm="+go));
    }
    insertion=(url)=>{
        fetch(url,{crossDomain:true,method:'GET',headers:{}})
        .then(res=>{return res.json() ; })
        .then(data=>{ 
           //console.log(data);
            //this.setState({catchoisie:data[0].nomcategorie})
         })
    }
     handleSubmit=(event) => {
        event.preventDefault();
        this.sendinsert();
        //console.log(this.state.catchoisie);
    }
    

    getlist=(url)=>{
        fetch(url,{crossDomain:true,method:'GET',headers:{}})
        .then(res=>{return res.json() ; })
        .then(data=>{ 
            
            this.setState({categorie:data});
           this.setState({catchoisie:{idcategorie:data[0].idcategorie,nomcategorie:data[0].nomcategorie}})
           
         })
    }
    handleChange=(event)=>{
        if(event.target.value!=="" && !isNaN(event.target.value)){
            if (event.target.name==="sma" ) {
            
                this.setState({sma:event.target.value});
             }else if(event.target.name==="sme"){

                 this.setState({sme:event.target.value});
             }
        }
      
        if (event.target.name==="categorie" ) {
           this.setState({catchoisie:{nomcategorie:event.target.value}})
        }
       
        
    }
    
    render() { 
        return (
            <div className="container">

   
    <center><div className="card shadow mb-3">
        
        <div className="title-card card-header">
            <h2>Mise à jour des SME et SMA</h2>
        </div>
        <form onSubmit={this.handleSubmit}>
            <div className="card-body">
                <p>Categorie :  </p>
    <input list="categories" value={this.state.catchoisie.nomcategorie}  onChange={this.handleChange} name="categorie" id="categorie"/>

<datalist id="categories">
{this.state.categorie.map((cate)=>
                         <option      value={cate.nomcategorie}>{cate.nomcategorie}</option>
                        )}
</datalist> 
                    
               
                
                <p>SMA : <input type="text" onChange={this.handleChange}  value={this.state.sma} name="sma" className="form-control"/></p>
                
                <p>SME : <input type="text"  onChange={this.handleChange} value={this.state.sme} name="sme" className="form-control"/></p>

                <input type="submit" className="btn " value="Enregistrer"/>

            </div>
        </form>
    </div></center>
    </div>
        );
    }
}
 
export default UpdateSMA;

    
