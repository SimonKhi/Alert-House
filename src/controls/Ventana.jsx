import React, { useEffect, useState } from 'react';
import { Switch, Typography } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import VentanaAbierta from '../images/ventanaAbierta.png';
import VentanaCerrada from '../images/VentanaCerrada.png';
import { MostrarNotificacion } from './MostrarNotificacion';
import './alerta.css';

const Ventana = ({name}) => {
    const [estadoBoton, cambiarEstadoBoton] = useState(false);
    const [condicion, cambiarCondicion] = useState(false);

    useEffect(() => {
        if(estadoBoton === true) {
            if(condicion === false){
                MostrarNotificacion(name);
            }
        }
    }, [estadoBoton, condicion, name])

    return (
        <div className='alineacion'>
            <Typography.Title level={5}>{name}</Typography.Title>
            {estadoBoton === true ?
                <>
                {condicion === true ?
                    <div className='cerrada'>
                        <img width="100%" src={VentanaCerrada} alt="vence" />
                    </div>
                    :
                    <div className='abierta'>
                        <img width="100%" src={VentanaAbierta} alt="venab" />
                    </div>

                }
                </>
                :
                <div>
                    <img width="100%" src={VentanaCerrada} alt="vence" />
                </div>
            }
            <br />
            <Switch
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
                checked={estadoBoton}
                onChange={(value) => cambiarEstadoBoton(value)}
            />
        </div>
    );
}
 
export default Ventana;