import React, { Component } from 'react';
class FirstCard extends Component {
    state = {  } 
    style={
        width: '50%'
    }
    defStyle=(style)=>{
        return {
            width: style
        }
    }
    render() { 
        return (
            <div className="col">
                            <div className="container">
                            <h4 className="small fw-bold">Pourcentage {this.props.sex}<span className="float-end">{this.props.percent}</span></h4>
                                    <div className="progress mb-4">
                                        <div className="progress-bar bg-info" aria-valuenow={this.props.percent} aria-valuemin="0" aria-valuemax="100" style={{width:this.props.percent+"%"}}><span className="visually-hidden">40%</span></div>
                                    </div>
                </div>
                </div>        
        );
    }
}
 
export default FirstCard;