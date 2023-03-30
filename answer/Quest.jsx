import React,{Component} from 'react';

class Quest extends Component {
    constructor(props){
        super();
        this.state.type_question=props.type;
        this.state.intitule=props.intitule;
        this.state.numero_question=props.numero;
        this.state.reponse_possible=props.answers;
    }
    state={
        intitule:"",
        reponse_possible:[],
        type_question:"",
        numero_question:0,
        answer:"",
    }

    handlechange=(event)=>{
        this.setState({answer:event.target.value});
        this.props.sets(this.state.numero_question,event.target.value);
    }
    handlechange_area=(event)=>{
        this.setState({answer:event.target.value});
        this.props.sets(this.state.numero_question,event.target.value);
    }
    chooseInput=()=>{
        let farany=<>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<textarea className="form-control mb-3" onChange={this.handlechange_area} placeholder="Entrez votre reponse..." value={this.state.answer}></textarea></>
        if(this.state.type_question === "CH"){
            farany=this.state.reponse_possible.map(rep => <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" onChange={this.handlechange} checked={rep === this.state.answer} value={rep}/> {rep+" "}</p>)
        }
        return farany;
    }
    render(){
        return (
            <>
                <p><strong>{this.state.numero_question} ) {this.state.intitule}</strong></p>
                <div>
                    {this.chooseInput()}
                </div>
            </>
        );
    }
}
export default Quest;