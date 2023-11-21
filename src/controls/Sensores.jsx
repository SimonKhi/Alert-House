import React from 'react';
import Ventana from './Ventana';
import Puerta from './Puerta';
import styled from 'styled-components';
import useObtenerSensores from '../hooks/useObtenerSensores';

const Sensores = () => {
    const [sensores] = useObtenerSensores()

    return (
        <>
            {sensores.map((sensor) => {
                if(sensor.acceso === 'Puerta'){
                    return (
                        <Alineacion key={sensor.id}>
                            <Puerta sensor={sensor} />
                        </Alineacion>
                    )
                }else{
                    return (
                        <Alineacion key={sensor.id}>
                            <Ventana sensor={sensor} />
                        </Alineacion>
                    )
                }
            })}
            {sensores.length === 0 &&
                <NoSensores>
                    <h2>Aun no hay sensores agregados</h2>
                </NoSensores>
            }

        </>
    );
}

const Alineacion = styled.div`
    text-align: center;
`;

const NoSensores = styled.div`
    grid-column: 1 / -1;
    display: flex;
    justify-content: center;
`;
 
export default Sensores;