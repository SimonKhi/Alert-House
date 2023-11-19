import React, { useEffect, useState } from 'react';
import { Switch, Typography } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import PuertaAbierta from '../images/puertaabierta.webp';
import PuertaCerrada from '../images/puertacerrada.webp';
import { MostrarNotificacion } from './MostrarNotificacion';
import useConexion from '../hooks/useConexion';

const Puerta = ({sensor}) => {
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