import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import PlatformService from '../../services/PlatformService';

const ConfirmDeletion = (props: any) => {
    const platformService = new PlatformService();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const deleteCard = (id: String) => {
        platformService.deletePlatform(id);
        setShow(false);
    }
    return (
      <>
        <Button variant="danger" onClick={handleShow}>
         Delete
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Delete <b>{props.platformName}</b>?</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to delete <b>{props.platformName}</b> platform?</Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={() => deleteCard(props.platformId)}> Yes </Button>
            <Button variant="success" onClick={handleClose}>
              No
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default ConfirmDeletion;