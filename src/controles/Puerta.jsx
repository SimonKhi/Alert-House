import React, { useEffect, useState } from 'react';
import { Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import PuertaAbierta from '../imagenes/PuertaAbierta.png';
import PuertaCerrada from '../imagenes/PuertaCerrada.png';
import { MostrarNotificacion } from './MostrarNotificacion';
import './alerta.css';

const Puerta = ({name}) => {
    const [estadoBoton, cambiarEstadoBoton] = useState(true);
    const [condicion, cambiarCondicion] = useState(false);

    useEffect(() => {
        if(estadoBoton === true) {
            if(condicion ===false){
                MostrarNotificacion(name);
            }
        }
    }, [estadoBoton, condicion, name])

    return (
        <div className='alineacion'>
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
 
export default Puerta;