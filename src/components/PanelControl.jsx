import { Helmet } from 'react-helmet';
import { Typography } from 'antd';
import Controles from '../controls/Controles';
import Alarma from '../controls/Alarma';
import Sensores from '../controls/Sensores';
import './panelControl.css';

const PanelControl = () => {
    return (
        <>
            <Helmet>
                <title>Alert House</title>
            </Helmet>
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
                <Typography.Title level={3} id='tituloSensores'>Sensores</Typography.Title>
                <Sensores />
            </div>
        </>
    );
}

export default PanelControl;