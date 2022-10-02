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
      </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
