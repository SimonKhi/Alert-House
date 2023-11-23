import React, { useEffect, useState } from 'react';
import { Switch, Typography } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import PuertaAbierta from '../images/puertaabierta.webp';
import PuertaCerrada from '../images/puertacerrada.webp';
import { MostrarNotificacion } from './MostrarNotificacion';
import { actualizarSensor } from '../firebase/actualizarCondiciones';
import { Tam } from '../components/Dimensiones';

const Puerta = ({sensor}) => {
    const [estado, cambiarEstado] = useState();
    const [estadoSwitch, cambiarEstadoSwitch] = useState();
    const nombre = sensor.acceso.concat(' ', sensor.nombre);
    
    // Conseguimos el estado del Switch una vez con el primer renderizado
    useEffect(() => {
        sensor.enabled === 1 ? cambiarEstadoSwitch(true) : cambiarEstadoSwitch(false)
    },[]);

    // Conseguimos el estado del sensor cada vez que haya un cambio
    useEffect(() => {
        sensor.estado === 1 ? cambiarEstado(true) : cambiarEstado(false)
    },[sensor.estado]);

    // Lógica para mostrar la Notificación y actualizar el estado 
    // de la activación del sensor, son se guarda
   useEffect(() => {
        if(estadoSwitch === true){
            if(estado === false){
                MostrarNotificacion(nombre);
            }
            actualizarSensor({id: sensor.id, enabled: 1})
        } else if (estadoSwitch === false) {
            actualizarSensor({id: sensor.id, enabled: 0})
        }
    }, [estado, estadoSwitch])

    return (
        <>
            <Typography.Title level={5}>{nombre}</Typography.Title>
            <Tam>
            {estadoSwitch === true ?
                <>
                {estado === true ?
                    <img width="100%" src={PuertaCerrada} alt="puece" />
                    :
                    <img width="100%" src={PuertaAbierta} alt="pueab" />
                }
                </>
                :
                <img width="100%" src={PuertaCerrada} alt="puece" />
            }
            </Tam>
            <br/>
            <Switch
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
                checked={estadoSwitch}
                onChange={(value) => cambiarEstadoSwitch(value)}
            />
        </>
    );
}
 
export default Puerta;