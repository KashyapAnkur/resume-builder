import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const Modals = ({
    show,
    handleClose
}) => {

    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Terms & Condition</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione sint vero placeat perspiciatis veritatis, dolore minima quod voluptates accusamus maxime totam nemo illum facere quas nihil quae molestias eveniet quibusdam deleniti, eius eos nobis expedita. Amet!
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    Ok
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Modals;