import React from 'react';
import Ventana from '../controles/Ventana';
import Puerta from '../controles/Puerta';

const Sensores = () => {
    return (
        <>
            <Puerta name="Puerta Principal" />
            <Ventana name="Ventana Sala" />
            <Ventana name="ventana comedor" />
            <Ventana name="Ventana Cocina" />
        </>
    );
}
 
export default Sensores;