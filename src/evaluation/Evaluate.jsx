import React,{ Component} from 'react';
import Terminal from '../Terminal';
import BaseName from '../BaseName';
import QuizNote from './QuizNote';
import MainAdmin from '../component/MainAdmin';
class Evaluate extends Component {
    constructor(props) {
        super();
    }
    state={
        eval:[],
        note:[],
        candidat:{nom:"",prenom:""},
        poste:"",
        nb_libre:0,
        nb_qcm:0,
        embauche:{},
    }
    

    getData=(data)=>{
        // console.log(data.embauche);
        let ilaina=data.embauche;
        this.setState({eval:data.eval,candidat:{nom:ilaina.nomcandidat,prenom:ilaina.prenomcandidat},poste:ilaina.nomposte,nb_libre:data.nb_libre,nb_qcm:data.nb_qcm});
        this.embauche=ilaina;
        let temp=[];
        let count=0;
        for(let i=0;i<data.eval.length;i++){
            if(data.eval[i].type_question !=="CH"){
                temp.push({id:count,numero:data.eval[i].numero_question,note:-1});
                count++;
            }
        }
        this.setState({note:temp});
    }
    componentDidMount() {
        Terminal.requestJSON(BaseName.url()+"Answer/getAnswer.php?idrecrutement="+new URLSearchParams(window.location.search).get('idrecrutement')+"&idcandidat="+new URLSearchParams(window.location.search).get('idcandidat'),this.getData,{crossDomain:true,method:"GET",headers:{}});
    }
    getmessage=(data)=>{
       if(data.message!=null){
        window.location.replace("/mainAdmin")
       }
        console.log(data.message);
    }
    onSubmit= (event)=>{
        event.preventDefault();
        let tosend={
            "idcandidat":this.embauche.idcandidat,
            "idrecrutement":this.embauche.idrecrutement,
            "note":this.state.note
        };
        console.log(BaseName.url()+"Answer/evaluate.php?q="+JSON.stringify(tosend));
        Terminal.requestJSON(BaseName.url()+"Answer/evaluate.php?q="+JSON.stringify(tosend),this.getmessage,{crossDomain:true,method:"GET",headers:{}})

      ;
    }

    takeNotes=(numero_question,note)=>{
        let temp=this.state.note;
        let zv=temp.findIndex(res=>res.numero===numero_question);
        temp[zv].note=note;
        this.setState({note: temp});
    }
    render() {
        let isa=0;
        for (let i = 0; i < this.state.note.length; i++) {
            if(this.state.note[i].note!==-1 && this.state.note[i].note!==""){
                isa=isa+1;
            }
        }
        return(
            <>
                <div className="container">
                    <div className="row m-3">
                            <div className="col col-lg-12 col-md-12 col-sm-12">
                                <h1 className="text-center text-dark">Les Reponses du candidat {this.state.candidat.nom+" "+this.state.candidat.prenom}</h1>
                                <h2 className="text-dark text-center text-opacity-75">Pour le poste de/d' {this.state.poste}</h2>
                            </div>
                            <hr className="text-dark border-3 opacity-50"/>
                            <div className="col col-lg-12 col-md-12">
                                <form className="form" onSubmit={this.onSubmit}>
                                    {this.state.eval.map(ev=>
                                    
                                        <QuizNote subs={this.takeNotes} hide={ev.type_question==="CH"?"lasa":""} reponse={ev.reponse_client} key={ev.numero_question} num={ev.numero_question} barem={ev.type_question==="CH"?this.state.nb_qcm:this.state.nb_libre}>
                                            {ev.intitule_question}
                                        </QuizNote>
                                        )
                                    }

                                    {isa===this.state.note.length?<button className="btn btn-primary form-control">Soumettre</button>:<></>}
                                    
                                </form>
                               
                            </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Evaluate;