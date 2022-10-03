import React ,{ Component} from 'react';
import './tricks.css';
class QuizNote extends Component {
    constructor(props) {
        super();
        this.state.reponse=props.reponse;
    }
    state = {
         reponse:"",
         note:"", 
    }

    handleChange=(event)=>{
        const value=event.currentTarget.value;
        const valera=Number.parseInt(value);
        if(valera!==undefined){
            if(valera<=Number.parseInt(this.props.barem) && valera>=0){
                this.setState({note:value});
                this.props.subs(this.props.num,valera);
                // console.log("as");
            }
            else{
                this.setState({note:""});
            }
        }
    }

    render() { 
        return (
             <>
                <div className="row mb-5">
                    <div className="mb-3 col col-lg-6 col-md-12 col-sm-12">
                        <h4 className="text-dark"><strong><u>Question {this.props.num}:</u></strong> <span className="fw-semibold">{this.props.children}</span> </h4>
                        <h5 className="text m-0 fw-bold text-success">&nbsp;&nbsp;&nbsp;&nbsp;{'='}&gt; {this.state.reponse}</h5>
                    </div>
                    <div className={"col col-lg-6 col-md-12 col-sm-12 "+this.props.hide}>
                        <div className="input-group mb-2 mr-sm-2">
                            <input readOnly={this.props.rdl} onInput={this.handlechange} onChange={this.handleChange} value={this.state.note} type="number" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Note"/>
                            <div className="input-group-prepend w-50">
                                    <div className="input-group-text text-dark w-25 text-center"><strong>/{this.props.barem}</strong></div>
                                </div>
                        </div>
                    </div>
                <hr />
                </div>
             </>
             );
    }
}
 
export default QuizNote;