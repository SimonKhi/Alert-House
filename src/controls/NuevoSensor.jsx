import React, { useState, useEffect } from 'react';
import { Typography } from 'antd';
import SensorAbierto from '../images/sensor-abierto.webp';
import SensorCerrado from '../images/sensor-cerrado.webp';
import { BotonSensor } from './Botones';
import { actualizarControl } from '../firebase/actualizarCondiciones';
import Opciones from './Opciones';
import theme from '../theme';

const NuevoSensor = ({sensor}) => {
    const [condicion, cambiarCondicion] = useState();
    const nombre = sensor.acceso.concat(' ', sensor.nombre);
    
    //Como el estado del sensor ya se encuentra en la base de datos
    //Con useEffect obtengo su valor
    useEffect(() => {
        sensor.estado === 1 ? cambiarCondicion(true) : cambiarCondicion(false)
    },[sensor.estado]);
        
    const AccionBoton = () => {
        // Niego la condicion cada vez que se presione al botón
        // y actualiza el estado del sensor en la bd
        if(!condicion === true){
            actualizarControl({id: sensor.id, estado: 1})
        } else {
            actualizarControl({id: sensor.id, estado: 0})
        }
    }
    
    return (
        <>
            <BotonSensor onClick={() => AccionBoton()}>
                    {condicion === true ?
                        <img width="100%" src={SensorCerrado} alt='sence' />
                        :
                        <img width="100%" src={SensorAbierto} alt='senab' />
                    }
            </BotonSensor>
            <Typography.Text align="center" style={{color: theme.danube_950}}>{nombre}</Typography.Text>
            <Opciones sensor={sensor}/>
        </>
    );
}
 
export default NuevoSensor;