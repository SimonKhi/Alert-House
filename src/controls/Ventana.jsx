import React, { useEffect, useState } from 'react';
import { Switch, Typography } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import VentanaAbierta from '../images/ventanaabierta.webp';
import styled from 'styled-components';
import VentanaCerrada from '../images/ventanacerrada.webp';
import { MostrarNotificacion } from './MostrarNotificacion';

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
        <Alineacion>
            <Typography.Title level={5}>{name}</Typography.Title>
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
        </Alineacion>
    );
}

const Alineacion = styled.div`
    text-align: center;
`;
 
export default Ventana;