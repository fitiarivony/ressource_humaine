import React, { Component } from 'react';
class RdvMitokana extends Component {
    state = this.props 
    render() { 
        let daty=new Date(this.props.heure);
        return (<React.Fragment>
                <td>{this.props.candidat}</td>
                <td>{daty.toLocaleString()}</td>
                <td>{this.props.bureau}</td>
                
                </React.Fragment>
            );
    }
}
 
export default RdvMitokana;