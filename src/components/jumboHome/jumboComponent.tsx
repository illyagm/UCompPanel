import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

const jumboComponent = () => {
    return (
            <Jumbotron fluid className="jumbo">
                <div className='overlay'>
                <Container>
                    <h1>User Panel</h1>
                    <h5>Comparador de videojuegos, software, peliculas, productos electronicos, accesorios, ropa, plataformas de trading...</h5>
                </Container>
                </div>
            </Jumbotron>
    )
}

export default jumboComponent;