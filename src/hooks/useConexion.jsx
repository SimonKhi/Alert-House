import { useState, useEffect } from "react";

const useConexion = (sensor) => {
    const [estado, cambiarEstado] = useState();
    const [enabled, cambiarEnabled] = useState();

    // Conseguimos el enabled del Switch una vez con el primer renderizado
    useEffect(() => {
        sensor.enabled === 1 ? cambiarEnabled(true) : cambiarEnabled(false)
    },[]);

    // Conseguimos el estado del sensor cada vez que haya un cambio
    useEffect(() => {
        sensor.estado === 1 ? cambiarEstado(true) : cambiarEstado(false)
    },[sensor.estado]);

    return [estado, enabled];
}
 
export default useConexion;