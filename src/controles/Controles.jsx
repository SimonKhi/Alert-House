import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../theme';
import NuevoSensor from './NuevoSensor';
import ModuloAgregar from './ModuloAgregar';
import { BotonAgregar } from './Botones';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

const Controles = () => {
    const [visibleAgregar, cambiarVisibleAgregar] = useState(false);

    return (
        <ContenedorSensores>
            <ContenedorAgregar>
                <BotonAgregar onClick={() => cambiarVisibleAgregar(true)}>
                    <FontAwesomeIcon icon={faCirclePlus} size='5x'/>
                </BotonAgregar>
                <ModuloAgregar visible={visibleAgregar} cambiarVisible={cambiarVisibleAgregar}/>
            </ContenedorAgregar>
        </ContenedorSensores>
    );
}
 
const ContenedorSensores = styled.div`
    display: grid;
    width: 96%;
    /* min-height: 185px; */
    border: solid ${theme.borde};
    border-radius: 10px;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 10px;
    padding: 8px;
`;

const ContenedorAgregar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100px;
`;

export default Controles;