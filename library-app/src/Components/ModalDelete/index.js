import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../../Style/Components/modal.css'
import '../../Style/Components/modal.css'

const ModalDelete = (props) => {
    const { buttonName, modalTitle, className, bookTitle, message} = props;

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
        <Button className={className} variant="none" onClick={handleShow}>{buttonName}</Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>{modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body className='img-delete text-center'>
                <img  src='https://lily-library.netlify.app/assets/checked.svg'/>
                <h3>{bookTitle} </h3>
            </Modal.Body>
            <Modal.Footer>
            <Button className='btn-save' onClick={handleClose}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
        </div>
    )
}

export default ModalDelete