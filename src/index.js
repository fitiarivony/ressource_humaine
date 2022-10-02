import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ListeRdv from './component/ListeRdv';
import ListeRdvPourEntretien from './component/ListeRdvEntretien';
import FormNoteRdv from './component/FormNoteRdv';
// import ListeRdvRO from './component/ListeRdvRO';

import 'bootstrap/dist/css/bootstrap.css';
import  {
  BrowserRouter,Routes,Route
  } from "react-router-dom";  
import FormOrganisationRdv from './component/FormOrganisationRdv';
import ListeRdvRO from './component/ListeRdvRO';
import NoteForm from './component/NoteForm';
import Accueil from './component/Accueil';
import Annonce from './component/Annonce';
import CandidatFormulaire from './component/CandidatFormulaire';
import Statistique from './component/Statistique';
import MainAdmin from './component/MainAdmin';
import ListeRecrutement from './component/ListeRecrutement';
import ListeRdvFini from './component/ListeRdvFini';
import ListeCandidature from './component/ListeCandidature';
import LoginAdmin from './component/LoginAdmin';
import CoefficientForm from './component/CoefficientForm';
import NoCoeffRecr from './component/NoCoeffRecr';


// Embauche
import InsertionSMA from './component/SME & SMA/InsertionSMA';
import UpdateSMA from './component/SME & SMA/UpdateSMA';
import InsertionEmploye from './component/embauche/InsertionEmploye.jsx'
import RecrutementDone from './component/embauche/RecrutementDone';
import ListeEmbauche from './component/embauche/ListeEmbauche';
import AccueilEmbauche from './component/embauche/accueil/AccueilEmbauche'
import CDD from './component/Modele contrat/CDD';
import EmpNoContrat from './component/Modele contrat/EmpNoContrat';
import CDI from './component/Modele contrat/CDI';
import ContratEssai from './component/Modele contrat/ContratEssai';
import TablePlanning from "./component/generationPlan/TablePlanning"
import LoginEmploye from "./component/embauche/LoginEmploye.jsx";
import AccEmp from './component/AccueilEmploye/AccEmp';
import DemandeConge from './component/DemandeConge/DemandeConge.jsx'
import Option from "./component/Option/Option.jsx"
import Comptage from './component/Comptage congé/Comptage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <Routes>
    {/* Entretien */}
      <Route path={'/rdent'} element={<ListeRdvPourEntretien/>}></Route>
      <Route path={'/rdfini'} element={<ListeRdvFini/>}></Route>
      <Route path={'/l'} element={<ListeRdv/>} ></Route>
      <Route path={'/genListRdv'} element={<ListeRdv/>} ></Route>
      <Route path={'/form'} element={<FormNoteRdv/>} ></Route>
      <Route path={'/init'} element={<FormOrganisationRdv/>} ></Route>
      <Route path={'/rdvsuivant'} element={<ListeRdvRO/>} ></Route>
      <Route path={'/organiseRdv'} element={<ListeRecrutement/>}></Route>
      <Route path={'/stats'} element={<Statistique/>}></Route>

      <Route path={'/noteform'} element={<NoteForm/>} ></Route>
      <Route path={'/'} element={<Accueil/>} ></Route>
      <Route path={'/mainClient'} element={<Annonce/>} ></Route>
      <Route path={'/mainAdmin'} element={<MainAdmin/>} ></Route>
      <Route path={'/depotcandidature/:recrutement'} element={<CandidatFormulaire/>}></Route>
      
     <Route path={'/recrnoceff'} element={<NoCoeffRecr/>}></Route>
      <Route path={'/listCandidature'} element={<ListeCandidature/>}></Route>
      <Route path={'/logAdmin'} element={<LoginAdmin/>}></Route>
      <Route path={'/coeff/:idrecrutement'} element=<CoefficientForm/> ></Route>
    

     {/* Embauche */}
     <Route path={'/insertsm'} element={<InsertionSMA/>}></Route> 
      <Route path={'/updatesm'} element={<UpdateSMA/>}></Route> 
      <Route path={'/embauche'} element={<InsertionEmploye/>}></Route>
      <Route path={'/recrutement_done'} element={<RecrutementDone/>}></Route>
      <Route path={'/admis'} element={<ListeEmbauche/>}></Route>
      <Route path={'/accueilembauche'} element={<AccueilEmbauche/>}></Route>
      <Route path={'/CDD'} element={<CDD/>}></Route>
      <Route path={'/CDI'} element={<CDI/>}></Route>
      <Route path={'/Contrat d essai'} element={<ContratEssai/>}></Route>
      <Route path={'/listenocontr'} element={<EmpNoContrat/>}></Route>
      
      {/* Conge */}
      <Route path={'/planning'} element= { <TablePlanning/>  } ></Route>
      <Route path={'/logEmploye'} element={<LoginEmploye/>}></Route>
      <Route path={'/accemp'} element={<AccEmp/>}></Route>
      <Route path={'/askconge'} element={<DemandeConge/>}></Route>
      <Route path={'/option'} element={<Option/>}></Route>
      <Route path={'/compteconge'} element={<Comptage/>}></Route>
      </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
