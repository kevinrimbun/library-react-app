import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FloatingLabel, Form } from "react-bootstrap";

const ModalEdit = (props) => {
    const { buttonName, modalTitle, className} = props;

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
        <Button className={className} variant="none" onClick={handleShow}>{buttonName}</Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Edit Book</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <>
                    <Form.Label>Url</Form.Label>
                    <FloatingLabel controlId="floatingInput" label="Url">
                    <Form.Control type="text" placeholder="Url" />
                    </FloatingLabel>
                    </>
                    <> 
                    <Form.Label>Title</Form.Label>
                    <FloatingLabel controlId="floatingInput" label="Title">
                    <Form.Control type="text" placeholder="Your Title" />
                    </FloatingLabel>
                    </>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={4}  placeholder="Describe Your Book" />
                    </Form.Group>
                </Form>
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

export default ModalEdit