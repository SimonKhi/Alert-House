import { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { useAuth } from "../context/AuthContext";
import { collection, onSnapshot, query, where } from "firebase/firestore";

const useObtenerAlarma = () => {
    const { usuario } = useAuth();
    const [alarmas, cambiarAlarmas] = useState([]);

    useEffect(() => {
        const consulta = query(
            collection(db, 'alarmas'),
            where('uidUsuario', '==', usuario.uid)
        );
        
        const unsuscribe = onSnapshot(consulta, (snapshot)=>{
            cambiarAlarmas(snapshot.docs.map((alarma) => {
                return{...alarma.data(), id: alarma.id}
            }));
        });

        return unsuscribe;
    }, [usuario])

    return [alarmas];
}
 
export default useObtenerAlarma;