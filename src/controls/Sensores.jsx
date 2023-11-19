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
        </>
    );
}

const Alineacion = styled.div`
    text-align: center;
`;
 
export default Sensores;