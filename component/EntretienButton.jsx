import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class EntretienButton extends Component {
    state = {  } 
    
    render() { 
        return (
            <React.Fragment>
                <Link to={"/form?id="+this.props.candidat+"&&recrut="+this.props.idrecrut}> 
                    <button className="btn btn-success btn-sm">
                        Commencer entretien
                    </button>
                </Link>
            </React.Fragment>
        );
    }
}
 
export default EntretienButton;