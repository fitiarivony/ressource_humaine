import React, { Component } from 'react';
import "./assets/dist/css/bootstrap.min.css";
import "./assets/css/Contrat.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import URLHelper from '../../Helper/URLHelper';
class CDI extends Component {
    state = { 
        info:{
            idemploye:"",
            nom:"",
            prenom:"",
            genre:"",
            adresse:"",
            situation_juridique:"",
            dabany:"",
            matr_cnaps:"",
            dateembauche:"",
            idfonction:"",
            idcandidat:"",
            iddept:"",
            nomdept:"",
            nomfonction:"",
            salairebase:"",
            datenaissance:"",
            nomdupere:"",
            nomdelamere:"",
        },
        dateaj:new Date().toLocaleString(),

     } 
     constructor() {
        super();
        this.getEmploye();
        // console.log(this.state.info);
     }
    getEmploye=() => {
        const params = new URLSearchParams(window.location.search); 
        let url="classEmbauche/trait/emp_cont.php?idemploye="+params.get('idemploye');
        this.getURLEmploye(URLHelper.urlgen(url));
       // console.log(URLHelper.urlgen(url));
      
    }
    
    getURLEmploye=(url)=>{
        fetch(url,{crossDomain:true,method:'GET',headers:{}})
        .then(res=>{return res.json() ; })
        .then(data=>{ 
            
            this.setState({info:data});
           
         });
        
    }
    gmapPrint() {
        let content = document.getElementById("contrat"); // get you map details
        let newWindow = window.open(); // open a new window
        newWindow.document.write(content.innerHTML); // write the map into the new window
        newWindow.print(); // print the new window
    }
    render() { 
        return (
            <div className="container" >
            <div className="contrat" id="contrat" >
        <h2 className="title">CONTRAT DE TRAVAIL A DUREE INDETERMINEE</h2>
        <br/><br/><br/>
        <div className="">
            <p>Entre les contractants ci-dessous,</p>
            <p>EMPLOYEUR :</p>
            <ul>
            <li>NOM / Dénomination :E-RH</li>
            <li>Adresse exacte :Andraharo</li>
            </ul>
        </div>
        <br/>
        <div className="">
            <p>TRAVAILLEUR :</p>
            <ul>
            <li>Noms et prénoms :{this.state.info.nom}  {this.state.info.prenom}</li>
                    <li>Né le :{this.state.info.datenaissance} </li>
                    <li>Fils ou fille de :{this.state.info.nomdupere} 
                        <br/>
                        et de :{this.state.info.nomdelamere} 
                    </li>
                  
                    <li>Domicile à Madagascar :{this.state.info.adresse}</li>    
            </ul>
        </div>
        <br/><br/><br/>
        <div>
            <p>A établi le présent contrat régi par les dispositions de la loi n°2003-044 du 28 juillet 2004 portant Code du Travail Malgache et ses textes subséquents.</p>
        </div>

        <ol>
            <div>
                <li><h4>GENERALITES</h4></li>
                <div>
                    <h5>Art.1: NATURE ET DUREE DU CONTRAT</h5>
                    <p>Le présent contrat est établi pour une durée déterminée de           (2) (3) et prend effet à compter du  {this.state.dateaj}</p>
                    <p>Le travailleur accomplira une période d’essai de        mois (4) à compter de la date d’effet de ce contrat. Pendant cette période, le contrat pourra être résilié à tout moment de part et d’autre sans préavis et sans indemnité autre que celle de la compensatrice de congé et du reliquat de salaire.</p>
                    <p>Conformément aux dispositions des articles 41 et 43 du Code du Travail, le présent contrat devra être soumis au visa de l’Inspection du Travail et ne pourra prendre effet qu’à compter de l’obtention de l’autorisation d’emploi délivrée par le Ministre chargé du Travail.</p>
                </div>
                <br/>
                <div>
                    <h5>Art.2: LIEU D’EMPLOI</h5>
                    <p>Le lieu d’emploi est à</p> 
                    <p>Selon les nécessités de service, le lieu d’emploi peut être transféré en tout autre lieu où la société est amenée à intervenir, à Madagascar comme à l’extérieur, y compris à l’étranger.</p>
                </div>
                <br/>
                <div>
                    <h5>Art.3: FONCTIONS ET QUALIFICATIONS</h5>
                    <p>Le travailleur est recruté en qualité de   </p>
                    <p>Classification professionnelle : HC</p>
                </div>
                <br/>
                <div>
                    <h5>Art.4: REMUNERATION</h5>
                    <p>Salaire de base  :{this.state.info.salairebase}  Ar/mois</p>
                    <p>Autres avantages</p>
                </div>
                <br/>
                <div>
                    <h5>Art.5: CONGES</h5>
                    <p>Le travailleur aura droit, à l’issue de ses douze mois de service effectif, à un congé d’une durée de 2,5 jours calendaires par mois de travail. La date de jouissance des congés sera fixée d’un commun accord avec l’Employeur.</p>
                    <p>Pendant la durée de ses congés, l’Employé percevra le même salaire qu’en temps normal. Le congé ne pourra être remplacé par une indemnité compensatrice.</p>
                    <p>Toutefois, en cas de rupture du contrat, avant que le travailleur ait exercé ses droits au congé, il lui sera alloué par la Société, en lieu et place du congé, une indemnité compensatrice de congé non pris calculée d’après la durée du congé auquel l’Employé pouvait prétendre.</p>
                </div>
                <br/>
                <div>
                    <h5>Art.6: ACCIDENT DE TRAVAIL ET MALADIES PROFESSIONNELLES</h5>
                    <p>En cas d’accident de travail ou de maladie professionnelle, le travailleur bénéficiera, tant pour l’indisponibilité que pour l’incapacité permanente qui en résulterait, du régime institué par le Code de Prévoyance Sociale et ses textes d’application en vigueur.</p>
                </div>
                <br/>
                <div>
                    <h5>Art.7: RETRAITE ET SANTE</h5>
                    <p>Il appartient à l’employeur d’affilier le travailleur auprès de la CNaPS.</p>
                    <p>L’employeur prend en charge les soins résultant de maladie du travailleur et des membres de sa famille conformément au Titre IV Chapitre IV, article 128 et suivants du Code du Travail.</p>
                </div>

                <br/>

                <li><h4>PARTIE RESERVEE AUX TRAVAILLEURS RECRUTES A L’ EXTERIEUR DU TERRITOIRE </h4></li>
                <div>
                    <p>Résidence habituelle (lieu d’embauche et de rapatriement) :</p>
                    <p>Adresse exacte dans ce pays  :</p>
                </div>
                <br/>
                <div>
                    <p><strong>Art.8 :</strong>L’employeur prendra en charge / ne prendra pas en charge (2) les frais de déplacement des membres de la famille du travailleur pendant la période d’essai prévue par l’article 1.</p>
                    <p><strong>Art.9 :</strong>L’employeur prend en charge les frais de déplacement du travailleur et des membres de sa famille entre le lieu de sa résidence habituelle ci-dessus et le lieu d’emploi à l’embauche en cas de congé normal et à l’expiration ou la rupture du contrat de travail dans les conditions prévues par le Décret n°68.174 du 18 avril 1968.</p>
                    <p><strong>Art.10 :</strong>Le travailleur bénéficiera d’un congé payé au lieu de sa résidence habituelle tous les ans / deux ans / trois ans (2).</p>
                </div>
                <br/>
                <div>
                    <h5>Art.11: RESILIATION DU CONTRAT</h5>
                    <p>a partie qui prend l'initiative de rompre le contrat de travail doit notifier à l'autre partie sa décision écrite avec indication des motifs sur lesquels elle se fonde et la transmettre par tous les moyens probants à celle-ci dont par lettre recommandée avec accusé de réception.</p>
                    <p>Chacune des parties doit aviser l’autre partie de son intention ou non de renouveler le contrat à durée déterminée ……. mois avant son expiration. Le contrat de travail à durée déterminée ne peut cesser avant terme par la volonté d'une seule des parties, que dans les cas prévus au contrat et dans les cas de faute lourde prévus dans le Règlement Intérieur ou, à défaut, laissés à l'appréciation de la juridiction compétente. Au cas où cette disposition ne serait pas respectée et qu’aucun règlement à l’amiable n’a été conclu, la partie défaillante devrait régler à l’autre partie la durée restante à courir pour l’exécution du contrat.</p>

                </div>
                <br/>
                <div>
                    <h5>Art.12: DIFFERENDS</h5>
                    <p>Le tribunal compétent pour connaître tout différend surgi à l’occasion de l’exécution du présent contrat est celui du lieu de travail.</p>
                </div>
                <br/>
                <div>
                    <h5>Art.13: AVENANT</h5>
                    <p>Toute modification qui sera apportée au présent contrat fera l’objet d’un avenant signé par les parties notamment ses dispositions substantielles.</p>
                </div>
                <br/>
                <div>
                    <h5>Art.14: DISPOSITION FINAL</h5>
                    <p>Pour tous les autres cas non prévus par le présent contrat, les deux parties s’en remettent aux dispositions du droit commun en vigueur dont la législation sociale.</p>
                </div>
                <br/><br/><br/><br/>
                <center>
                    <div>
                        <small>Fait à Antananarivo, le  {this.state.dateaj}</small>
                    </div>
                </center>
                <br/><br/><br/>

                <div className="row">
                    <div className="col">
                        <p>SIGNATURE DU TRAVAILLEUR</p>
                    </div>
                    <div className="col">
                        <p> SIGNATURE DE L’EMPLOYEUR <br/>(Noms et Qualité, cachet)</p>
                    </div>
                </div>
            </div>
        </ol>
        
        </div>
        Entrer la date de fin:<input type="date" className="form-control" placeholder="Date fin"/>

        <button type="button" className="btn btn-primary" onClick={this.gmapPrint}>Imprimer</button>
        </div>
    );
    }
}
 
export default CDI;