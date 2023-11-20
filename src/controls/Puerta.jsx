import React, { useEffect, useState } from 'react';
import { Switch, Typography } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import PuertaAbierta from '../images/puertaabierta.webp';
import PuertaCerrada from '../images/puertacerrada.webp';
import { MostrarNotificacion } from './MostrarNotificacion';
import { actualizarSensor } from '../firebase/actualizarCondiciones';

const Puerta = ({sensor}) => {
    const [estado, cambiarEstado] = useState();
    const [estadoBoton, cambiarEstadoBoton] = useState();
    const nombre = sensor.acceso.concat(' ', sensor.nombre);
    
    // Conseguimos el estado del Switch una vez con el primer renderizado
    useEffect(() => {
        sensor.enabled === 1 ? cambiarEstadoBoton(true) : cambiarEstadoBoton(false)
    },[]);

    // Conseguimos el estado del sensor cada vez que haya un cambio
    useEffect(() => {
        sensor.estado === 1 ? cambiarEstado(true) : cambiarEstado(false)
    },[sensor.estado]);

    // Lógica para mostrar la Notificación y actualizar la activación del sensor
   useEffect(() => {
        if(estadoBoton === true){
            if(estado === false){
                MostrarNotificacion(nombre);
            }
            actualizarSensor({id: sensor.id, enabled: 1})
        } else if (estadoBoton === false) {
            actualizarSensor({id: sensor.id, enabled: 0})
        }
    }, [estado, estadoBoton])

    return (
        <>
            <Typography.Title level={5}>{nombre}</Typography.Title>
            <Tam>
            {estadoBoton === true ?
                <>
                {estado === true ?
                    <img width="100%" src={PuertaCerrada} alt="" />
                    :
                    <img width="100%" src={PuertaAbierta} alt="" />
                }
                </>
                :
                <img width="100%" src={PuertaCerrada} alt="" />
            }
            </Tam>
            <br/>
            <Switch
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
                checked={estadoBoton}
                onChange={(value) => cambiarEstadoBoton(value)}
            />
        </>
    );
}

const Tam = styled.div`
    width: 65%;
    margin-left: auto;
    margin-right: auto;
`;
 
export default Puerta;