import React, { useEffect, useState } from 'react';
import { Switch, Typography } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import PuertaAbierta from '../images/puertaabierta.webp';
import PuertaCerrada from '../images/puertacerrada.webp';
import { MostrarNotificacion } from './MostrarNotificacion';

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
        <Alineacion>
            <Typography.Title level={5}>{name}</Typography.Title>
            <Tam>
            {estadoBoton === true ?
                <>
                {condicion === true ?
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
        </Alineacion>
    );
}

const Tam = styled.div`
    width: 65%;
    margin-left: auto;
    margin-right: auto;
`;

const Alineacion = styled.div`
    text-align: center;
`;
 
export default Puerta;