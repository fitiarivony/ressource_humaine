import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default class OffCanvasQ extends Component {
    constructor(name,...props){
        super();
        this.state.name=name;
    }
    state={
        show:false,
        name:"",
    };
    handleClose=()=>{
        this.setState({show:false});
    }
    handleShow=()=>{
        this.setState({show:true});
    }
    render(){
        return (
            <>
      <Button variant="primary" onClick={this.handleShow} className="me-2">
        {this.state.name}
      </Button>
      <Offcanvas show={this.state.show} onHide={this.handleClose} {...this.props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
            <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
            </Offcanvas.Body>
        </Offcanvas>
    </>
        )
    }
}