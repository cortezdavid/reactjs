import React from 'react'
import { Modal, Button } from 'react-bootstrap'


const ModalConfirm = (props) => {
    return (
        <>
        <Modal
            {...props}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                Su orden es {props.order}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Cerrar</Button>
            </Modal.Footer>
        </Modal>
    </>   
    )
}

export default ModalConfirm
