import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ConfirmDeletion = (props: any) => {
    const { platformId, platformName, deletePlatform, setPlatforms, getAll, compare, truncate } = props;
    //Metodos modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const deleteCard = (id: String) => {
        deletePlatform(id);
        setShow(false);
    }
    useEffect(() => {
      setTimeout(()=>{
       getAll().then((response: { data: any[]; }) => {
          setPlatforms(response.data.sort(compare));
        });
        console.log('UPDATING DATA!')
       }, 250)
    // eslint-disable-next-line
    }, [show]);
    return (
      <>
        <Button variant="danger" onClick={handleShow}>
         Delete
        </Button> 
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Delete <b>{truncate(platformName)}</b>?</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to delete <b>{platformName}</b> platform?</Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={() => deleteCard(platformId)}> Yes </Button>
            <Button variant="success" onClick={handleClose}>
              No
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default ConfirmDeletion;