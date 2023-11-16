import React from 'react';
import Ventana from './Ventana';
import Puerta from './Puerta';

const Sensores = () => {
    return (
        <>
            <Puerta name="Puerta Principal" />
            <Ventana name="Ventana Sala" />
        </>
    );
}
 
export default Sensores;