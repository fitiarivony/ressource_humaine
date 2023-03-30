import React, { Component } from 'react';
class MoveButton extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <td className="m-2" ><button onClick={() => this.props.onDelete(this.props.candidat)} className="btn btn-danger btn-sm">Eliminer</button>
                <button onClick={() => this.props.onUp(this.props.candidat)} className="btn btn-secondary btn-sm">up↑</button>
                <button onClick={() => this.props.onDown(this.props.candidat)} className="btn btn-secondary btn-sm">down↓</button></td>
            </React.Fragment>
        );
    }
}
 
export default MoveButton;