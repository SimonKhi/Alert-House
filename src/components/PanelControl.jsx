import React from 'react';
import { Helmet } from 'react-helmet';
import { Typography } from 'antd';
import Controles from '../controls/Controles';
import Alarma from '../controls/Alarma';
import Sensores from '../controls/Sensores';
import { useAuth } from '../context/AuthContext';
import agregarAlarma from '../firebase/agregarAlarma';
import theme from '../theme';
import { Superior, ContenedorAlarma, ContenedorControles, ContenedorSensores, TituloSensores } from './Dimensiones';

const PanelControl = () => {
    const { usuario } = useAuth();
    agregarAlarma(usuario.uid);

    return (
        <>
            <Helmet>
                <title>Alert House</title>
            </Helmet>
            <Superior>
                <ContenedorControles>
                    <Typography.Title level={3} style={{color: theme.danube_900}}>Simulación de los sensores</Typography.Title>
                    <Controles />   
                </ContenedorControles>
                <ContenedorAlarma>
                    <Typography.Title level={3} style={{color: theme.danube_900}}>Alarma</Typography.Title>
                    <Alarma />
                </ContenedorAlarma>
            </Superior>
            <ContenedorSensores>
                <TituloSensores>
                    <Typography.Title level={3} style={{color: theme.danube_900}}>Sensores</Typography.Title>
                </TituloSensores>
                <Sensores />
            </ContenedorSensores>
        </>
    );
}

export default PanelControl;