import React, { useEffect, useState } from 'react';
import { Switch, Typography } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import VentanaAbierta from '../images/ventanaabierta.webp';
import VentanaCerrada from '../images/ventanacerrada.webp';
import { MostrarNotificacion } from './MostrarNotificacion';
import useConexion from '../hooks/useConexion';

const Ventana = ({sensor}) => {
    const [estado, enabled] = useConexion(sensor);
    const [estadoBoton, cambiarEstadoBoton] = useState(enabled);
    const nombre = sensor.acceso.concat(' ', sensor.nombre);

    useEffect(() => {
        if(estadoBoton === true) {
            if(estado === false){
                MostrarNotificacion(nombre);
            }
        }
    }, [estadoBoton, estado, nombre])

    return (
        <>
            <Typography.Title level={5}>{nombre}</Typography.Title>
            <div>
            {estadoBoton === true ?
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
                checked={estadoBoton}
                onChange={(value) => cambiarEstadoBoton(value)}
            />
        </>
    );
}
 
export default Ventana;