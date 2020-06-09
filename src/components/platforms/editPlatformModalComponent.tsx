import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import PlatformService from '../../services/PlatformService';
const EditPlatformComponent = (props: any) => {
    //instancia serivicio
    const platformService = new PlatformService();
    //Metodos formulario
    const [datos, setDatos] = useState({
      name: props.name,
      url: props.url,
    });
    const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
      setDatos({
        ...datos,
        [event.target.name]: event.target.value
      })
    };
    const sendData = (event: { preventDefault: () => void; }) => {
      event.preventDefault();
      platformService.editPlatform(props.id, datos.name, datos.url);
      console.log('sending data...' + datos.name + ' ' + datos.url);
      setShow(false);
    }
    //Metodos modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
      return (
        
        <>
          <Button variant="warning" onClick={handleShow}>
            Edit
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Editar plataforma</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form onSubmit={sendData}>
              <Form.Group controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Platform name" defaultValue={props.name} onChange={handleInputChange} name="name"/>
                  <Form.Text className="text-muted">
                      Write an indicative name for the platform
              </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                  <Form.Label>Url</Form.Label>
                  <Form.Control type="text" placeholder="Platform url" defaultValue={props.url} onChange={handleInputChange} name="url"/>
                  <Form.Text className="text-muted">
                      Write the url of the site
                  </Form.Text>
              </Form.Group>
              <Button variant="warning" type="submit">Save</Button>
              </Form>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
  
    export default EditPlatformComponent;