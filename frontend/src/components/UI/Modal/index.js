import React from 'react'
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';

function NewModal(props) {
    return (
        <Modal size={props.size} show={props.show} onHide={props.handleClose} animation={false}>
            <Modal.Header style={{backgroundColor:"#3B3E79"}} closeButton>
                <Modal.Title>{props.modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.children}
            </Modal.Body>
            <Modal.Footer>
                {
                    props.buttons ? props.buttons.map((btn,index) =>
                        <Button key={index} variant={btn.color} onClick={btn.onClick}>
                           {btn.label}
                        </Button>):
                        <Button
                         variant="primary" {...props} 
                         style={{backgroundColor:'#3B3E79'}}
                         className="btn-sm" 
                         onClick={props.onSubmit}>
                Save
            </Button>
                }

            </Modal.Footer>
        </Modal>
    )
}

export default NewModal;