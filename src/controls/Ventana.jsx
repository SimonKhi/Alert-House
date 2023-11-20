import React, { useEffect, useState } from 'react';
import { Switch, Typography } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import VentanaAbierta from '../images/ventanaabierta.webp';
import VentanaCerrada from '../images/ventanacerrada.webp';
import { MostrarNotificacion } from './MostrarNotificacion';
import useConexion from '../hooks/useConexion';
import { actualizarSensor } from '../firebase/actualizarCondiciones';

const Ventana = ({sensor}) => {
    const [estado, enabled] = useConexion(sensor)
    // const [estado, cambiarEstado] = useState();
    const [estadoSwitch, cambiarEstadoSwitch] = useState(enabled);
    const nombre = sensor.acceso.concat(' ', sensor.nombre);

    // Conseguimos el estado del Switch una vez con el primer renderizado
    // useEffect(() => {
    //     sensor.enabled === 1 ? cambiarEstadoSwitch(true) : cambiarEstadoSwitch(false)
    // },[]);

    // Conseguimos el estado del sensor cada vez que haya un cambio
    // useEffect(() => {
    //     sensor.estado === 1 ? cambiarEstado(true) : cambiarEstado(false)
    // },[sensor.estado]);

    // Lógica para mostrar la Notificación y actualizar la activación del sensor
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
            <div>
            {estadoSwitch === true ?
                <>
                {estado === true ?
                    <img width="100%" src={VentanaCerrada} alt="vence" />
                    :
                    <img width="100%" src={VentanaAbierta} alt="venab" />

                }
                </>
                :
                <img width="100%" src={VentanaCerrada} alt="vence" />
            }
            </div>
            <br />
            <Switch
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
                checked={estadoSwitch}
                onChange={(value) => cambiarEstadoSwitch(value)}
            />
        </>
    );
}
 
export default Ventana;