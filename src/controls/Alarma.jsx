import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp, faVolumeOff, faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import { BotonActivado, BotonDesactivado } from "./Botones";
import "./alarma.css";

const Alarma = () => {
    const [estadoAlarma, cambiarEstadoAlarma] = useState(true);
    const [condicion, cambiarCondicion] = useState(false);

    const AccionButton = () => {
        cambiarEstadoAlarma(!estadoAlarma);
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