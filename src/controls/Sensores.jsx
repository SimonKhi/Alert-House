import React from 'react';
import Ventana from './Ventana';
import Puerta from './Puerta';
import useObtenerSensores from '../hooks/useObtenerSensores';
import { Alineacion, NoSensores, Aviso } from '../components/Dimensiones';

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
                    <Aviso>Aun no hay sensores agregados</Aviso>
                </NoSensores>
            }

        </>
    );
}
 
export default Sensores;