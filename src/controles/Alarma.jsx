import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp, faVolumeOff, faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import { BotonActivado, BotonDesactivado } from "./BotonAlarma";
import "./alarma.css";

const Alarma = () => {
    const [estadoAlarma, cambiarEstadoAlarma] = useState(true);
    const [condicion, cambiarCondicion] = useState(false);

    const DesactivarAlarma = () => {
        cambiarEstadoAlarma(false);
    }

    const ActivarAlarma = () => {
        cambiarEstadoAlarma(true);
    }

    return (
        <>
            <h2>Zona de la Alarma</h2>
            <div align="center">
                {estadoAlarma === true ?
                <>
                    { condicion === true ?
                        <BotonActivado onClick={DesactivarAlarma}>
                            <FontAwesomeIcon className="animacion flash" icon={faVolumeUp} size="6x" color="#da1414" />
                        </BotonActivado>
                    :
                        <BotonDesactivado onClick={DesactivarAlarma}>
                            <FontAwesomeIcon icon={faVolumeOff} size="6x" />
                        </BotonDesactivado>
                    }
                </>
                :
                <>
                    <BotonDesactivado onClick={ActivarAlarma}>
                        <FontAwesomeIcon icon={faVolumeMute} size="6x" />
                    </BotonDesactivado>
                </>
                }
            </div>
        </>
    );
}
 
export default Alarma;