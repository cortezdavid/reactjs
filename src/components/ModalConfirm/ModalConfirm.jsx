import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './ModalConfirm.css'


const ModalConfirm = (props) => {
    
    return (
        <>
        <Modal
            {...props}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                ¡Gracias por su compra!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Sr/sra {props.name} le enviaremos más información al siguiente correo {props.email}
                </p>
                <p>Su Id de compra es {props.order}</p>
            </Modal.Body>
            <Modal.Footer>
                <Link to=''><Button variant="success" onClick={props.onHide}>Volver al inicio</Button></Link>
            </Modal.Footer>
        </Modal>
    </>   
    )
}

export default ModalConfirm
