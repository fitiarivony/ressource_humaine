import React,{Component} from 'react';
import Questions from './Questions';
import './script.css';
import Terminal from '../Terminal';
import BaseName from '../BaseName';
export default class GenQuestion extends Component {
    constructor(props) {
        super();
    };
    state={
        question:[],
        choix:"CH",
        poste:{iddept:""},
        
    }
    idrecrutement=new URLSearchParams(window.location.search).get("idrecrutement");

    atao=(data)=>{
        this.setState({poste:data.poste});
        //console.log(data);
    }
    componentDidMount(){
        // console.log(BaseName.url()+"embauche/getEmbauche.php/?q="+this.idrecrutement);
        Terminal.requestJSON(BaseName.url()+"embauche/getEmbauche.php/?q="+this.idrecrutement,this.atao,{crossDomain:true,method:"GET",headers:{}});
       
    }
    handleChangeChoice=(event)=>{
        // let temp=this.state.question;
        // temp.push({numero_question:temp.length+1,intitule_question:"",type_question:"",reponse_possible:[],reponse_correct:null});
        this.setState({choix:event.target.value});
        // this.setState({question:temp});
    }

    addMore=()=>{
        let temp=this.state.question;
        temp.push({numero_question:temp.length+1,intitule_question:"",type_question:this.state.choix,reponse_possible:[],reponse_correct:null});
        this.setState({question:temp});
    }

    setvaliny=(ids,intitule,reponse,reponse_correct)=>{
        let temp=this.state.question;
        temp[ids].intitule_question=intitule;
        temp[ids].reponse_possible=reponse;
        temp[ids].reponse_correct=reponse_correct;
        this.setState({question:temp});
    }

    setReponse=(id,reponse)=>{
        let temp=this.state.question;
        temp[id].reponse_possible=reponse;
        this.setState({question:temp});
    }

    end=()=>{
        // console.log(this.state.question);
        let a={
            "question": this.state.question,
            "recrutement":this.idrecrutement
        };
        console.log(JSON.stringify(a));
        fetch(BaseName.url()+"Quest/insert.php?q="+JSON.stringify(a),{
            crossDomain: true,
            method:"GET",
            headers:{}
        }).then(response => response.text())
        .then(data=>console.log(data));
        // let s=JSON.parse(this.state.question);
        // console.log(JSON.stringify(s));
    }
    render() {
        return (
            <>
           <div className="container">
            <h1 className="text-center text-dark">Creation de Teste pour le poste de: {this.state.poste.nomposte}</h1>
            <h6 className="text-center text-disabled"><em>{this.state.poste.infoposte}</em></h6>
            <hr className="text-dark "/>
            <div className="row">
                <div className="col-6 mb-3">
                    {this.state.question.map(q=><><Questions key={q.numero_question-1} add={this.addMore} karazana={q.type_question} setv={this.setvaliny}  identification={q.numero_question-1}></Questions></>)}
                </div>
                <div className="col-6 ">
                
                <div className="card carte border-0 m-t-5 bg-light-gray">

                    <div id="top" className="card-body">
                        <p className="m-5">
                            <select className="select-custom form-control" onChange={this.handleChangeChoice}>
                                <option value="CH">Choix Multiple</option>
                                <option value="LIB">Reponse Libre</option>
                            </select>
                        </p>
                        <p  className="m-5"><a href={'#'+this.state.question.length} className="btn btn-success btn-block text-light" onClick={this.addMore}><i className="fas fa-plus"></i> Qestion</a></p>
                        <p  className="m-5"><button className="btn btn-primary btn-block " onClick={this.end}>Enregistrer</button></p>
                    </div>

                </div>
                </div>
            </div>
           </div>
                
            </>
        );
    }
}