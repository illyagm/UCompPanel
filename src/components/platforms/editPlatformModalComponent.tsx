import React, { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
const EditPlatformComponent = (props: any) => {
  const { id, name, url, editPlatform, setPlatforms, getAll, compare } = props;
  //Metodos modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //Metodos formulario
    const [datos, setDatos] = useState({
      name: name,
      url: url,
    });
    const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
      setDatos({
        ...datos,
        [event.target.name]: event.target.value
      })
    };
    const sendData = (event: { preventDefault: () => void; }) => {
      event.preventDefault();
      editPlatform(id, datos.name, datos.url);
      console.log('sending data...' + datos.name + ' ' + datos.url);
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
          <Button variant="warning" onClick={handleShow}>
            Edit
          </Button>
          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Editar plataforma</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form onSubmit={sendData}>
              <Form.Group controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Platform name" defaultValue={name} onChange={handleInputChange} name="name"/>
                  <Form.Text className="text-muted">
                      Write an indicative name for the platform
              </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                  <Form.Label>Url</Form.Label>
                  <Form.Control type="text" placeholder="Platform url" defaultValue={url} onChange={handleInputChange} name="url"/>
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