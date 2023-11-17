import React, { useState } from 'react';
import { Typography } from 'antd';
import SensorAbierto from '../images/sensor-abierto.webp';
import SensorCerrado from '../images/sensor-cerrado.webp';
import { BotonSensor } from './Botones';

const NuevoSensor = () => {
    const [estado, cambiarEstado] = useState(true);

    return (
        <div>
            <BotonSensor onClick={() => cambiarEstado(!estado)}>
                    {estado === true ?
                        <img width="100%" src={SensorCerrado} alt='' />
                    :
                        <img width="100%" src={SensorAbierto} alt='' />
                    }
            </BotonSensor>
            <Typography.Title level={5} align="center">Puerta Principal</Typography.Title>
        </div>
    );
}
 
export default NuevoSensor;