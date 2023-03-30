import React, { Component}from "react";
import Response from './Response';
import './script.css';
class Questions extends Component {
    
    state={
        intitule:"",
        reponse:[],
        kar:"",
        isa:-1,
        
    };
    constructor(props) {
        super();
        this.state.kar=props.karazana;
        console.log(props.karazana);
        if(props.karazana === "LIB"){
            this.state.reponse=[];
        }
    };
    handlechange=(event)=>{
        const value=event.currentTarget.value;
        this.setState({intitule:value});
    }
    Valideo=()=>{
       
        let alefa=[];
        let alefa2=null;
        console.log("------");
        console.log(this.state.reponse);
        console.log("-------");
        let temp=this.state.reponse;
        for(let i=0;i<temp.length;i++){
            alefa.push(temp[i].intitule);
            if(temp[i].isreponse){
                alefa2=temp[i].intitule;
            }
            
        }
        this.props.setv(this.props.identification,this.state.intitule,alefa,alefa2);
    }
    add=()=>{
        // console.log(this);
        if(this.state.kar ==="LIB"){
            console.log("Ato");
        }else{
            // this.state.reponse.push({ids:this.state.reponse.length,intitule:"",isreponse:false});
            let temp=this.state.reponse;
            // console.log("****inadd*****");
            // console.log(this.state.isa);
            // console.log(temp);
            // console.log("*****inadd****");
            let izy=temp.length;
            if(izy===-1){
                izy=1;
            }
            let re=this.state.isa+1;
            temp.push({ids:re,intitule:"",isreponse:false});
            this.setState({reponse:temp,isa:re});
            // console.log("****valider*****");
            // console.log(temp);
            // console.log("*****valider****");

        }
    }
    setReponse=(pa,id,intitule,isreponse)=>{
        let temp=this.state.reponse;
        console.log("*******tt**");
        console.log(id+"="+isreponse);
        console.log("*******tt**");
        for(let i=0;i<temp.length;i++){
            
            temp[i].isreponse=false;
        }
        temp[id].intitule=intitule;
        temp[id].isreponse=isreponse;
        this.setState({reponse:temp});
        // console.log("*******reponse**");
        // console.log(temp);
        // console.log("******reponse***");
    }

    setRep=(valiny)=>{
        this.setState({reponse:valiny});
    }

    addQ=()=>{
        this.props.add();
    }
    render () {
 
        return (
            <>
            
              <div id={this.props.identification+1} className="card border-0 pos-fixed carte">
                <div className="card-header">
                    <div><a href="#top" className="btn btn-secondary">Done</a></div>
                    <h2 className="text-dark text-center">Quest {this.props.identification+1}:{this.state.intitule}</h2>
                </div>
                <div className="card-body">
                    <div className="container">
                        <div className="mb-3 row">
                            <div className="col">
                                <div className="mb-3">
                                    <label for="" className="form-label text-dark">Intitule de Votre Question</label>
                                    <input type="text" className="mb-4 form-control" onChange={this.handlechange} value={this.state.intitule} name="" id="" aria-describedby="helpId" placeholder="entre votre question..."/>
                                        {this.state.kar==="LIB"?<React.Fragment></React.Fragment>:<button className="btn btn-info btn-block mb-1" onClick={this.add}><i className="fas fa-plus"></i>Reponse</button>}
                                    <a href={'#'+(this.props.identification+2)} className="btn btn-danger btn-block text-light" onClick={this.addQ}><i className="fas fa-plus"></i>Question</a>

                                </div>
                            </div>
                            <div className="col">
                            {this.state.reponse.map((rep)=><span><Response key={rep.ids} l={this.setRep} liste={this.state.reponse}  pa={this.props.identification}  ae={rep.ids}></Response></span>)}
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="card-footer text-muted">
                        <div className="list-group">
                            <button className=" btn mb-2 btn-success" onClick={this.Valideo}>Enregistrer Modification</button>
                        </div>
                    </div>
                </div>
                
            </>
        );
    }
}
export default Questions;
