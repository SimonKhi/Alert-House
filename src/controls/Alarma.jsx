import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp, faVolumeOff, faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import { BotonActivado, BotonDesactivado } from "./Botones";
import useObtenerAlarma from '../hooks/useObtenerAlarma';
import { actualizarAlarma } from '../firebase/actualizarCondiciones';
import "./alarma.css";

const Alarma = () => {
    const [alar] = useObtenerAlarma();
    const alarma = alar[0];
    const [estadoAlarma, cambiarEstadoAlarma] = useState();
    const [condicion, cambiarCondicion] = useState(false);
    
    useEffect(() => {
        if(alarma){
            alarma.enabled === 1 ? cambiarEstadoAlarma(true) : cambiarEstadoAlarma(false)
        }
    },[alarma])
    
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