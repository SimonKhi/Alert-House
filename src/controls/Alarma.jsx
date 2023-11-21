import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp, faVolumeOff, faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import { BotonActivado, BotonDesactivado } from "./Botones";
import useObtenerAlarma from '../hooks/useObtenerAlarma';
import { actualizarAlarma } from '../firebase/actualizarCondiciones';
import "./alarma.css";
import useObtenerSensores from '../hooks/useObtenerSensores';

const Alarma = () => {
    const [sensores] = useObtenerSensores();
    const [alar] = useObtenerAlarma();
    const alarma = alar[0];
    const [estadoAlarma, cambiarEstadoAlarma] = useState();
    const [condicion, cambiarCondicion] = useState();

    // Para conseguir el estado del enabled del boton alarma
    useEffect(() => {
        if(alarma){
            alarma.enabled === 1 ? cambiarEstadoAlarma(true) : cambiarEstadoAlarma(false)
        }
    },[alarma]);

    // Para activar la alarma si se abre un acceso (puerta o ventana)
    // solo pasará si el sensor esta abierto y esta activado
    useEffect(() => {
        try {
            sensores.forEach((sensor) => {
                if(sensor.estado === 0 && sensor.enabled === 1){
                    throw new true;
                } else {
                    cambiarCondicion(false);
                }
            })
        } catch {
            cambiarCondicion(true);
        }
    }, [sensores]);
    
    const AccionButton = () => {
        if(!estadoAlarma === true){
            actualizarAlarma({id: alarma.id, enabled: 1})
        }else if(!estadoAlarma === false){
            actualizarAlarma({id: alarma.id, enabled: 0})
        }
    }

    return (    
        <div align="center">
            {estadoAlarma === true ?
            <>
                { condicion === true ?
                    <BotonActivado onClick={AccionButton}>
                        <FontAwesomeIcon className="animacion flash" icon={faVolumeUp} size="6x" color="#da1414" />
                    </BotonActivado>
                :
                    <BotonDesactivado onClick={AccionButton}>
                        <FontAwesomeIcon icon={faVolumeOff} size="6x" />
                    </BotonDesactivado>
                }
            </>
            :
            <>
                <BotonDesactivado onClick={AccionButton}>
                    <FontAwesomeIcon icon={faVolumeMute} size="6x" />
                </BotonDesactivado>
            </>
            }
        </div>
    );
}
 
export default Alarma;