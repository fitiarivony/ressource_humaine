import React,{ Component} from 'react';
import './script.css';
class Response extends Component {
    state={
        intitule:"",
        isreponse:false,
    }
    setTrue=()=>{
        let temp=this.props.liste;
        temp[this.props.ae].isreponse=true;
        for(let i=0;i<temp.length && i!==this.props.ae;i++){
            temp[i].isreponse=false;
        }
        this.props.l(temp);
        // this.props.sets(this.props.pa,this.props.ae,this.state.intitule,true);
        this.setState({isreponse:true});
        
        
    }
    valid=()=>{
        let temp=this.props.liste;
        temp[this.props.ae].intitule=this.state.intitule;
        this.props.l(temp);
        // this.props.sets(this.props.pa,this.props.ae,this.state.intitule,this.state.isreponse);
    }
    handlechange=(event)=>{
        const value=event.currentTarget.value;
        this.setState({intitule:value});
    }
    render() {
        // console.log(this.state.isreponse);
        return (
            <>
                <input className="mb-4 form-control" onChange={this.handlechange} value={this.state.intitule} type="text" placeholder="La reponse..."/>
                <p>
                    <button className="btn btn-info bouton" onClick={this.valid}>Valider</button>
                    <button className="btn btn-success bouton" onClick={this.setTrue}>Vrai</button>
                </p>
                   
            </>
        );
    }
}
export default Response;
