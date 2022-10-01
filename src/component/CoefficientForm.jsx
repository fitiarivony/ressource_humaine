import './../assets/dist/css/bootstrap.min.css'
import './../assets/css/CoefficientForm.css'
import React, { useState } from "react";
import { useParams} from "react-router-dom";
import URLHelper from '../Helper/URLHelper';

export default function CoefficientForm() 
{
    const { idrecrutement } = useParams();
    let callchamp= () =>{
        // console.log(idrecrutement);
        let url="saisiecoefficient/getchamps.php?idrecrutement="+idrecrutement;
        askAnnee(URLHelper.urlgen(url));
        console.log(URLHelper.urlgen(url));
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
     const changecoeff=[];
     const update=(event)=>{
        event.preventDefault();
        champs.map((champ)=>{
            const newcoeff={
                'idchamp':champ.idchamp,
                'coefficient':document.getElementById(champ.idchamp).value
            };
            changecoeff.push(newcoeff);
        });
        gophp(JSON.stringify(changecoeff));
     }
     const gophp= (informations) =>{
        let url1="saisiecoefficient/updatecoefficient.php?info="+informations;
        subscribe(URLHelper.urlgen(url1));
    }
    
   const subscribe=(url)=>{
        fetch(url,{crossDomain:true,method:'GET',headers:{}})
        
    }
    return (
       
        <React.Fragment>
        <div className="container">

        <div className="row justify-content-center">

            <div className="col-md-9 col-lg-12 col-xl-10">

                <div className="card shadow-lg o-hidden border-0 my-5">

                    <div className="card-body p-0">

                         <div className="row">

                            <div className="col-lg-6 d-none d-lg-flex">
                                <div className="flex-grow-1 bg-login-image">
                                    {/* <img src={props.sourceImage} className="image"/>     */}
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h4 className="t mb-4">Saisie des coefficients du recrutement {idrecrutement}</h4>
                                    </div>

                                    <br/>

                                    <form className="user row" onSubmit={update} >
                                        { champs.map((champ)=>
                                         <div className="mb-3 col-6">
                                         <center><label  className="form-label">{champ.nom}</label></center>
                                         <input type="number"  id={champ.idchamp} min="1" className="form-control" />
                                     </div>
                                         ) }


                                        <hr/>
                                        <hr/>
                                        
                                        <button className=" submit btn btn-primary d-block btn-user w-100" type="submit">Enregistrer</button>
                                        
                                    </form>

                                </div>

                            </div>
                            
                        </div>

                    </div>

                </div>

            </div>

        </div>
        </div>
        </React.Fragment>
    );
}