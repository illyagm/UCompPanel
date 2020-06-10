import React, { useState, useEffect } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
const CreatePlatformModalComponent = (props: any) => {
  const { getAll, insertPlatform, setPlatforms, compare } = props;
  //Metodos modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //Metodos formulario
  const [datos, setDatos] = useState({
    name: '',
    url: ''
  });
  const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    })
  };
  const sendData = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    insertPlatform(datos.name, datos.url);
    console.log('sending data...' + datos.name + ' ' + datos.url + ' ' + datos.url);
    setShow(false);
    //console.log('get updated info ' + await props.getAll())

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
      <Button variant="success" onClick={handleShow}>
        Add...
        </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nueva plataforma</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={sendData}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Platform name" onChange={handleInputChange} name="name" />
              <Form.Text className="text-muted">
                Write an indicative name for the platform
            </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Url</Form.Label>
              <Form.Control type="text" placeholder="Platform url" onChange={handleInputChange} name="url" />
              <Form.Text className="text-muted">
                Write the url of the site
                </Form.Text>
            </Form.Group>
            <Button variant="success" type="submit">
              Insert
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreatePlatformModalComponent;