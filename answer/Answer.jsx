import React, {Component} from 'react';
import Quest from './Quest';
import './Answer.css'
import URLHelper from '../Helper/URLHelper';
class Answer extends Component {
    state = {
        intitule:"",
        candidat:new URLSearchParams(window.location.search).get('idcandidat'),
        recrutement:new URLSearchParams(window.location.search).get('idrecrutement'),
        questions:[],
        answers:[],

    }
    urlhelper={
        taketest:URLHelper.urlgen("Quest/getquestion.php"),
        sendtest:URLHelper.urlgen("Answer/answer.php"),
    }

    componentDidMount=()=>{
        this.getdata();
    }

    request=(url,act)=>{
        fetch(url,{
            crossDomain:true,
            method: 'GET',
            headers: {},
        }).then(response=>{return response.json()})
        .then((data)=>{act(data)});
    }

    managedata=(data)=>{
        const temp=[]
        // console.log(JSON.stringify(data));
        this.setState({questions:[...data.question]});
        for(let i=0;i<data.question.length;i++){
            temp.push({numero:data.question[i].numero_question,answer:""});
        }
        this.setState({answers:temp})
    }
    
    getdata=()=>{
        // request.
        const alefa=this.urlhelper.taketest+"?rc="+this.state.recrutement;
        this.request(alefa,this.managedata);
    }

    answered=(numero_question,res)=>{
        // for(let i=0;i<this.state.answers.length;i++){
        //     console.log("->"+this.state.answers[i].numero);
        // }
        const index=this.state.answers.findIndex((d)=>d.numero===numero_question);
        const temp=[...this.state.answers];
        if(index !== -1){
            temp[index].answer=res;
        }
        this.setState({answers: temp});
    }
    signal=(data)=>{
        if(data.message!=null){
            // this.setState({message:data.message});
            console.log(data.message);
            window.location.href="/home";
        }else{
            console.log("tsy misy e");
           
        }
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        // const url=this.urlhelper.sendtest+"?q="+JSON.
        const alefa={
            "idcandidat": this.state.candidat,
            "answers": this.state.answers,
            "recrutement":this.state.recrutement
        };
        // let json=JSON.parse(alefa);
        let url=this.urlhelper.sendtest+"?q="+JSON.stringify(alefa);
        console.log(url);
        this.request(url,this.signal);
        
        

    }
    render() {
        // let isa=this.state.answers.find((t)=>t.answer==="");
        let isa=0.0;
        for(let i=0;i<this.state.answers.length;i++){
            if(this.state.answers[i].answer!==""){
                console.log(this.state.answers[i].numero+":"+this.state.answers[i].answer);
                isa=isa+1.0;
            }
        }
        var percent=((isa/this.state.answers.length)*100);
        if(percent<25){
            percent=0;
        }else if(percent<50){
            percent=25;
        }else if(percent<75){
            percent=50;
        }else if(percent<100){
            percent=75;
        }else{
            percent=100;
        }
        return(
        <>
            <div className="container">
                <h1 className="text text-center text-dark">Repondre Au teste</h1>
                <h5 className="text text-center">Nombre de question: {this.state.questions.length}</h5>
                <hr />
                <div className="progress">
                    <div className={"progress-bar progress-bar-striped progress-bar-animated w-"+(percent)} role="progressbar" aria-valuenow={isa} aria-valuemin="0" aria-valuemax={this.state.answers.length}></div>
                </div>
                <div className="row mb-3">
                <div className="col">
                   <div className="card p-3 border-0">
                   <form onSubmit={this.handleSubmit} className="form">
                        {this.state.questions.map(question=> <Quest key={question.numero_question} sets={this.answered} answers={question.reponse_possible} numero={question.numero_question} type={question.type_question} intitule={question.intitule_question}></Quest>)}
                            {isa===this.state.answers.length?<button className="btn btn-success w-100 btn-block" type="submit">Renvoyer le teste</button>:<React.Fragment></React.Fragment>
}
                    </form>
                   </div>
                </div>
                
                <div className="col">
                    <div className="card border-0">
                        <h2 className="text-dark text-center">Vos reponses</h2>
                        <hr/>
                        {this.state.answers.map((answ) => <React.Fragment key={answ.numero}><h3 className="text text-dark">{answ.numero+"-"+answ.answer}</h3></React.Fragment>)}   
                    </div>
                </div>
                </div>
                   
                    
            
            </div>
        </>
        )
    }

}
export default Answer;