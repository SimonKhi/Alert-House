import React, { useEffect, useState } from 'react';
import { Switch, Typography } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import PuertaAbierta from '../images/PuertaAbierta.png';
import PuertaCerrada from '../images/PuertaCerrada.png';
import { MostrarNotificacion } from './MostrarNotificacion';
import './alerta.css';

const Puerta = ({name}) => {
    const [estadoBoton, cambiarEstadoBoton] = useState(true);
    /* Este valor (condicion) se saca de la BD, si la puerta esta cerrada = True, si esta abierta = False */
    const [condicion, cambiarCondicion] = useState(true); 

    useEffect(() => {
        if(estadoBoton === true) {
            if(condicion === false){
                MostrarNotificacion(name);
            }
        }
    }, [estadoBoton, condicion])

    return (
        <div className='alineacion'>
            <Typography.Title level={5}>{name}</Typography.Title>
            <div className='tam'>
            {estadoBoton === true ?
                <>
                {condicion === true ?
                    <div className='cerrada'>
                        <img width="100%" src={PuertaCerrada} alt="" />
                    </div>
                    :
                    <div className='abierta'>
                        <img width="100%" src={PuertaAbierta} alt="" />
                    </div>
                }
                </>
                :
                <div>
                    <img width="100%" src={PuertaCerrada} alt="" />
                </div>
            }
            </div>
            <br/>
            <Switch
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
                checked={estadoBoton}
                onChange={(value) => cambiarEstadoBoton(value)}
            />
        </div>
    );
}
 
export default Puerta;