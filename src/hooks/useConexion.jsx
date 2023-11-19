import { useState, useEffect } from "react";

const useConexion = sensor => {
    const [estado, cambiarEstado] = useState();
    const [enabled, cambiarEnable] = useState();
    
    useEffect(() => {
        sensor.estado === 1 ? cambiarEstado(true) : cambiarEstado(false)
        sensor.enabled === 1 ? cambiarEnable(true) : cambiarEnable(false)
    },[sensor]);
    
    return [estado, enabled];
}
 
export default useConexion;