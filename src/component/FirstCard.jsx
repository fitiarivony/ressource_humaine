import React, { Component } from 'react';
class FirstCard extends Component {
    state = {  } 
    render() { 
        return (
            <div className="col">
                            <div className="">
                                <div className="card-body">
                                   
                                    <div className="row align-items-center no-gutters">
                                        <div className="col me-2">
                                            <div className="text-uppercase text-warning fw-bold text-xs mb-1"><span>{this.props.attribut}</span></div>
                                            <div className="text-dark fw-bold h5 mb-0"><span>{this.props.value}</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        );
    }
}
 
export default FirstCard;