import React, { useState, useEffect } from 'react';
import { Typography } from 'antd';
import SensorAbierto from '../images/sensor-abierto.webp';
import SensorCerrado from '../images/sensor-cerrado.webp';
import { BotonSensor } from './Botones';

const NuevoSensor = ({sensor}) => {
    const [condicion, cambiarCondicion] = useState();
    const nombre = sensor.acceso.concat(' ', sensor.nombre);
    
    useEffect(() => {
        sensor.estado === 1 ? cambiarCondicion(true) : cambiarCondicion(false)
        
    },[sensor]);
    
    
    return (
        <>
            <BotonSensor onClick={() => cambiarCondicion(!condicion)}>
                    {condicion === true ?
                        <img width="100%" src={SensorCerrado} alt='' />
                    :
                        <img width="100%" src={SensorAbierto} alt='' />
                    }
            </BotonSensor>
            <Typography.Title level={5} align="center">{nombre}</Typography.Title>
        </>
    );
}
 
export default NuevoSensor;