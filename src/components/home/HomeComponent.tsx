import React from 'react';
import ImageGroupComponent from './ImageGroupComponent';

const homeComponent = () => {
    return (
        <div>
            <div>
                <h2>¿Que es UComp?</h2>
                <br></br>
                <p>UComp es un comparador de productos de todas las categorías. </p>
                <p>UComp es un comparador de sitios fiables dónde puedes comprar criptomonedas y comparar precios/impuestos</p>
                <p>La idea detrás de esta aplicación web es facilitar la tarea de búsqueda y comparativa de los productos online, escogiendo los 5 mejores precios entre todos los comercios de internet</p>
                <p>Es tan fácil como escribir el producto de interés y darle al botón de búsqueda.</p>

            </div>
            <ImageGroupComponent />
        </div>
    )
}

export default homeComponent;