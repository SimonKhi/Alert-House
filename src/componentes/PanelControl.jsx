import styled from 'styled-components';
import { Row, Col, Typography } from 'antd';
import Controles from '../controles/Controles';
import Alarma from '../controles/Alarma';
import Ventana from '../controles/Ventana';
import Puerta from '../controles/Puerta';
import './panelControl.css';
import theme from '../theme';

const PanelControl = () => {
    return (
        <>
            <div className='superior'>
                <div className='controles'>
                    <Typography.Title type='warning' level={3}>Controles</Typography.Title>
                    <Controles />   
                </div>
                <div className='contenedorAlarma'>
                    <Typography.Title level={3}>Alarma</Typography.Title>
                    <Alarma />
                </div>
            </div>
            <div className='contenedorSensores'>
                <Typography.Title level={3} id='tituloSensores'>Zona de sensores</Typography.Title>
                <div>
                    <Typography.Title level={5} align="center">Puerta Principal</Typography.Title>
                    <Puerta component="Magnetic_1" name="Puerta Principal"/>
                </div>
                <div>
                    <Typography.Title level={5} align="center">Ventana Sala</Typography.Title>
                    <Ventana component="PIR_3" name="Ventana de la Sala"/>
                </div>
            </div>
        </>
    );
}

export default PanelControl;