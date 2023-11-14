import { Typography } from 'antd';
import Controles from '../controles/Controles';
import Alarma from '../controles/Alarma';
import Sensores from '../controles/Sensores';
import './panelControl.css';

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
                <Typography.Title level={3} id='tituloSensores'>Sensores</Typography.Title>
                <Sensores />
            </div>
        </>
    );
}

export default PanelControl;