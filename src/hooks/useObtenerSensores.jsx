import { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { useAuth } from "../context/AuthContext";
import { collection, query, where, onSnapshot, orderBy } from "firebase/firestore";

const useObtenerSensores = () => {
    const { usuario } = useAuth();
    const [sensores, cambiarSensores] = useState([]);

    useEffect(() => {
        if(usuario !== null){
            const consulta = query(
                collection(db, 'sensores'),
                where('uidUsuario', '==', usuario.uid),
                orderBy('fecha','asc')
            );
    
            const unsuscribe = onSnapshot(consulta, (snapshot) => {
                cambiarSensores(snapshot.docs.map((sensor) => {
                    return {...sensor.data(), id: sensor.id}
                }));
            });
            return unsuscribe;
        }

    }, [usuario]);

    return [sensores];
}
 
export default useObtenerSensores;