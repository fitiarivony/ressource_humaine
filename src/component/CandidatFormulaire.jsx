import './../assets/dist/css/bootstrap.min.css'
import './../assets/css/CandidatFormulaire.css'
import DiplomeSelect from './DiplomeSelect';
import { useState } from 'react';
import {useNavigate, useParams} from "react-router-dom";
import URLHelper from '../Helper/URLHelper';
export default function CandidatFormulaire() 
{

    const { recrutement } = useParams();
    const navigate = useNavigate();
    const [diplomes,setDiplome]=useState([
        {numero :1,component:<DiplomeSelect numero="1" nameSelect="select1" nameInput="input1"></DiplomeSelect>}
    ]);

    const [nbrDiplome,setNbrDiplome]=useState(2);


    const ajouterDiplome=()=>{
        const diplomeCopy =[...diplomes];
        setNbrDiplome(nbrDiplome+1);
        //set name 
        var nameSelect="select"+nbrDiplome;
        var nameInput="input"+nbrDiplome;
        diplomeCopy.push({numero:nbrDiplome,component:<DiplomeSelect numero={nbrDiplome} nameSelect={nameSelect} nameInput={nameInput} ></DiplomeSelect>});
        setDiplome(diplomeCopy);
    }
   

     let callchamp= () =>{
       
        askAnnee(URLHelper.urlgen("inscription/champgenre.php?idrecrutement="+recrutement));
    }
     const [annee,experience]=useState([]);
   let askAnnee=(url)=>{
        fetch(url,{crossDomain:true,method:'GET',headers:{}})
        .then(res=>{return res.json() ; })
        .then(data=>{ 
            // console.log(data);
            experience(data);
         })
    }
   
     callchamp();
     
     const gophp= (informations) =>{
        subscribe(URLHelper.urlgen("inscription/subscribe.php?infocandidat="+informations));
    }
    
   const subscribe=(url)=>{
        fetch(url,{crossDomain:true,method:'GET',headers:{}})
        
    }
     
     const inserer=(event)=> {
        event.preventDefault();
     const tableau={
        "nom": document.getElementById("nom").value,
        "prenom":document.getElementById("prenom").value,
        "adresse":document.getElementById("adresse").value,
        "datenaissance":document.getElementById("datenaissance").value,
        "email":document.getElementById("email").value,
        "mdp":document.getElementById("mdp").value,
        "nompere":document.getElementById("nompere").value,
        "nommere":document.getElementById("nommere").value
     }
  //   alert("here");
    //  let tab=JSON.stringify(tableau);
    const diplomes=[];
    for (let index = 1; index < nbrDiplome; index++) {
        const diplome={"iddiplome":document.getElementById("select"+index).value,"filiere":document.getElementById("input"+index).value};
        diplomes.push(diplome);   
    }
    const champs=[];
    annee.map((champ)=> {
        
        const arg={"idchamp":champ.idchamp,"valiny":document.getElementById(champ.idchamp).value}
         champs.push(arg);
        return champs;
    });
    champs.push({'ichamp':'CH1',"valiny":document.getElementById("genreSelect").value});
    const operations={
        "infocandidat":tableau,
        "diplomes":diplomes,
        "champs":champs
    }

 gophp(JSON.stringify({"info":operations,'idrecrutement': recrutement}));
    navigate('/');
    
    //   console.log(params);
    //  alert(tab+"-------------");
     }
     
     const styleheader ={
        backgroundColor:"#085451",
        color:'white',
     }
    
    //  const params = new URLSearchParams(window.location.pathname);
    //  console.log(params.get("recrutement"));
    return (
       
        <div className="container text-center "  >
                        
        <div className="container card-header py-3" style={styleheader}>
            <p className="text m-0 fw-bold " >Saisie des candidats</p>
        </div>

        <form  onSubmit={inserer} >

            <div className="container">
                    <div className="row">
                        
                        <div className="col">
                            <div className="mb-3">
                                <label className="form-label" htmlFor="nom">
                                    <strong>Nom</strong>
                                </label>
                                <input required name="nom" className="form-control" id="nom" type="text" />
                            </div>
                        </div>

                        <div className="col">
                            <div className="mb-3">
                                <label className="form-label" htmlFor="prenom">
                                    <strong>Prenom</strong>
                                </label>
                                <input required name="prenom" className="form-control" id="prenom" type="text"/>
                            </div>
                        </div>

                    </div>


                    <div className="row">

                        <div className="col">
                            <div className="mb-3">
                                <label className="form-label" htmlFor="dateN">
                                    <strong>Date de naissance</strong>
                                </label>
                                <input required name="datenaissance"  className="form-control" id="datenaissance" type="date"/>
                            </div>
                        </div>

                        <div className="col">
                            <div className="mb-3">
                                <label className="form-label" htmlFor="Genre">
                                    <strong>Genre</strong>
                                </label>
                                <select name="CH1" id="genreSelect" className="form-control">
                                    <option value="">Choix...</option>
                                    <option value="Homme">Homme</option>
                                    <option value="Femme">Femme</option>
                                </select>
                            </div>
                        </div>

                    </div>

                    <div className="row">
                    <div className="col">
                            <div className="mb-3">
                                <label className="form-label" htmlFor="Adresse">
                                    <strong>Adresse</strong>
                                </label>
                                <input required  className="form-control" id="adresse" type="text" />
                            </div>
                        </div>


                        <div className="col">
                            <div className="mb-3">
                                <label className="form-label" htmlFor="email">
                                    <strong>Email</strong>
                                </label>
                                <input required  className="form-control" id="email" type="text" />
                            </div>
                        </div>

                        <div className="col">
                            <div className="mb-3">
                                <label className="form-label" htmlFor="mdp">
                                    <strong>Mot de passe</strong>
                                </label>
                                <input required  className="form-control" id="mdp" type="text"/>
                            </div>
                        </div>

                    </div>

                
                    <br/>
                    <hr/>
                    <br/>

                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="pere">
                                        <strong>Nom du père</strong>
                                    </label>
                                    <input required id='nompere' className="form-control" type="text"/>
                                </div>
                            </div>
                            
                            <div className="col">
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="mere">
                                        <strong>Nom de la mère</strong>
                                    </label>
                                    <input required id='nommere' className="form-control" type="text"/>
                                </div>
                            </div>                                                           

                        </div>

                        <div className="row">
                            <div className="col">
                                    {diplomes.map((diplome => 
                                        diplome.component   
                                    ))}
                            </div>
                            
                        
                            
                        </div>
                        

                        
                        <div className="mb-3">
                            <button onClick={ajouterDiplome} className="btn submit btn-sm">Ajouter</button>
                        </div>

                        <br/>
                        <div className="row">
                            
                                    {annee.map((champ => 
                                        <div className="col">
                                        
                                            <label className="form-label" htmlFor="address">
                                                <strong>{champ.nom}</strong>
                                            </label>
                                            <input required id={champ.idchamp} name={champ.idchamp} className="form-control" />
                                       
                                    </div>   
                                    ))}
                            
                            </div>

                            <br/><br/>
                        <div className="mb-3">
                            <button  className="btn submit btn-sm" onClick={inserer}>Inscription</button>
                        </div>

                        <br/><br/>

                    </div>

            </div>

        </form>

        </div>
       
    );
}