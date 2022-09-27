import React, { Component } from 'react';
import URLHelper from '../Helper/URLHelper';
import './../assets/js/bs-init';
import './../assets/js/theme';
import FirstCard from './FirstCard';
import SecondCard  from "./SecondCard";
import StatRdv from './StatRdv';
class Statistique extends Component {
    // donnee
    state = { 
        firstcards: [],
        secondcards: {
            chiffres:[],
            predominance:[]
        },
     } 

    // comportements
    constructor() {
        super();
        this.initialize();
    }
    initialize=() => {
        this.fillStats(URLHelper.urlgen("statistiques/getstats.php?idrecrutement=RE1"));
    }

    fillStats=(url)=>{
        fetch(url,{crossDomain:true,method:'GET',headers:{}})
        .then(res=>{return res.json() ; })
        .then(data=>{ 
            const stats=data;
            this.setState({firstcards: data.first});
            //  console.log(stats.second); 
           this.setState({secondcards:stats.second});
            //  console.log(this.state);
            // setchamp(data);
         })
    }
    //    console.log(annee[0]);
    // console.log(champs); 
     

    //affichage
    render() { 
        // console.log();
        return (
            <div id="wrapper">
      <div className="d-flex flex-column" id="content-wrapper">
            <div id="content">
                <div className="container-fluid">
                    <div className="d-sm-flex justify-content-between align-items-center mb-4">
                    </div>
                    <div className="row">
                    {
                        
                        this.state.firstcards.map((first)=>
                       
                        <FirstCard key={first.id} value={first.value} attribut={first.attribut} />
                        )}
                       
                </div>
            </div>
            <hr />
           <div className="row">
          <div className="col">
            {this.state.secondcards.length} 
          {this.state.secondcards.chiffres.map((second)=>
           <SecondCard sex={second.sexe} percent={second.moyenne}  />
           ) }
                  
            </div> 
            <div className="col">
                 <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="text-primary fw-bold m-0">Trois meileurs</h6>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <div className="row align-items-center no-gutters">
                                        <div className="col me-2">
                                            <h6 className="mb-0"><strong>Lunch meeting</strong></h6><span className="text-xs">10:30 AM</span>
                                        </div>
                                      
                                    </div>
                                </li>
                                
                            </ul>
                        </div>
                        </div>
           </div>
           <StatRdv></StatRdv>
        </div><a className="border rounded d-inline scroll-to-top" href="#page-top"><i className="fas fa-angle-up"></i></a>
    </div>
    </div>
   
        );
    }
}
 
export default Statistique;