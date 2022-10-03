import React, { Component} from 'react';
export default class Cardstat extends Component {
    state = {
        title: "Card title",
        valeur:1,
        icon:"fas fa-calendar fa-2x text-gray-300",
    }
    constructor(props) {
        super();
        this.state={title: props.title, valeur: props.valeur,icon: props.icon};
    }

    render(){
        return (
            <div className="card shadow border-start-primary py-2">
                <div className="card-body">
                    <div className="row align-items-center no-gutters">
                        <div className="col me-2">
                            <div className="text-uppercase text-primary fw-bold text-xs mb-1"><span>{this.state.title}</span></div>
                                <div className="text-dark fw-bold h5 mb-0"><span>{this.state.valeur}</span></div>
                                </div>
                            <div className="col-auto"><i className={this.state.icon}></i></div>
                        </div>
                    </div>
            </div>
        );
    }
}