import React, { useEffect, useState } from 'react';
import { Switch, Typography } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import VentanaAbierta from '../images/ventanaabierta.webp';
import VentanaCerrada from '../images/ventanacerrada.webp';
import { MostrarNotificacion } from './MostrarNotificacion';

const Ventana = ({sensor, key}) => {
    const [estadoBoton, cambiarEstadoBoton] = useState(false);
    const [condicion, cambiarCondicion] = useState(false);
    const nombre = sensor.acceso.concat(' ', sensor.nombre);

    useEffect(() => {
        if(estadoBoton === true) {
            if(condicion === false){
                MostrarNotificacion(nombre);
            }
        }
    }, [estadoBoton, condicion, nombre])

    return (
        <>
            <Typography.Title level={5}>{nombre}</Typography.Title>
            <div>
            {estadoBoton === true ?
                <>
                {condicion === true ?
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