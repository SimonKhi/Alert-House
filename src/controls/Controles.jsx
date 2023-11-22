import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../theme';
import NuevoSensor from './NuevoSensor';
import ModuloSensor from './ModuloSensor';
import { BotonAgregar } from './Botones';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import useObtenerSensores from '../hooks/useObtenerSensores';

const Controles = () => {
    const [visibleAgregar, cambiarVisibleAgregar] = useState(false);
    const [sensores] = useObtenerSensores();

    return (
        <ContenedorSensores>
            {sensores.map((sensor) => {
                return(
                    <Alineacion key={sensor.id}>
                        <NuevoSensor sensor={sensor}/>
                    </Alineacion>
                )
            })}
            <ContenedorAgregar>
                <BotonAgregar onClick={() => cambiarVisibleAgregar(true)}>
                    <FontAwesomeIcon icon={faCirclePlus} size='5x'/>
                </BotonAgregar>
                <ModuloSensor visible={visibleAgregar} cambiarVisible={cambiarVisibleAgregar}/>
            </ContenedorAgregar>
        </ContenedorSensores>
    );
}
 
const ContenedorSensores = styled.div`
    display: grid;
    width: calc(100%-15px);
    max-height: 180px;
    border: solid ${theme.borde};
    border-radius: 10px;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 10px;
    padding: 8px;
    overflow: auto;

    &::-webkit-scrollbar {
        width: 8px;     /* Tamaño del scroll en vertical */
        height: 8px;
    }

    &::-webkit-scrollbar-thumb {
        background: #ccc;
        border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #b3b3b3;
        box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
    }
`;

const ContenedorAgregar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100px;
`;

const Alineacion = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export default Controles;