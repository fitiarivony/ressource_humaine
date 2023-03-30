import './../assets/dist/css/bootstrap.min.css'
import './../assets/css/Annonce.css'
import { useState } from 'react';
import {Link}  from 'react-router-dom';
import URLHelper from '../Helper/URLHelper';
export default function Annonce(props) 
{
    const style={
        textDecoration: 'none',
        color: 'blue',
    }
    let callchamp= () =>{
        askAnnee(URLHelper.urlgen("annonce/selectall.php"));
    }
     const [champs,setchamp]=useState([]);
   let askAnnee=(url)=>{
        fetch(url,{crossDomain:true,method:'GET',headers:{}})
        .then(res=>{return res.json() ; })
        .then(data=>{ 
            // console.log(data);
            setchamp(data);
         })
    }
    //    console.log(annee[0]);
    // console.log(champs); 
     callchamp();
   
    return(
        <div className="row">
            <div class="alert alert-primary" role="alert">
<Link to="/logtest" >Se connecter pour passer au test</Link>
</div>
{ champs.map(champ=>
<div className='container '>
<div className="row">
<div className="title-card card-header py-3">
    <center><p className="text m-0 fw-bold">{champ.nomdept}</p></center>
</div>

<div className="container ">
    <center>
    <h5 className="fw-bold">Nous recherchons {champ.nomposte} </h5>
        <p>{champ.infoposte}</p> 

        <p>{champ.requis}</p>
    <p><Link  to={"/depotcandidature/"+champ.idrecrutement}  style={style}>Deposer ma candidature</Link></p></center>
</div>
</div>

</div>
       
        )} 
        </div>
    );

}