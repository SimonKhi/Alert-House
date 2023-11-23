import React, { useState } from 'react';
import NuevoSensor from './NuevoSensor';
import ModuloSensor from './ModuloSensor';
import { BotonAgregar } from './Botones';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'antd';
import useObtenerSensores from '../hooks/useObtenerSensores';
import { EncapsulaControles, ContenedorAgregar, AlineacionSensor } from '../components/Dimensiones';

const Controles = () => {
    const [visibleAgregar, cambiarVisibleAgregar] = useState(false);
    const [sensores] = useObtenerSensores();

    return (
        <EncapsulaControles>
            {sensores.map((sensor) => {
                return(
                    <AlineacionSensor key={sensor.id}>
                        <NuevoSensor sensor={sensor}/>
                    </AlineacionSensor>
                )
            })}
            <ContenedorAgregar>
                <Tooltip title='Agregar Sensor'>
                    <BotonAgregar onClick={() => cambiarVisibleAgregar(true)} >
                        <FontAwesomeIcon icon={faCirclePlus} size='4x'/>
                    </BotonAgregar>
                </Tooltip>
                <ModuloSensor visible={visibleAgregar} cambiarVisible={cambiarVisibleAgregar}/>
            </ContenedorAgregar>
        </EncapsulaControles>
    );
}

export default Controles;