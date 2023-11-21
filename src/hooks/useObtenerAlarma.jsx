import { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { useAuth } from "../context/AuthContext";
import { collection, onSnapshot, query, where } from "firebase/firestore";

const useObtenerAlarma = () => {
    const { usuario } = useAuth();
    const [alarma, cambiarAlarma] = useState([]);

    useEffect(() => {
        const consulta = query(
            collection(db, 'alarma'),
            where('uidUsuario', '==', usuario.uid)
        );
        
        const unsuscribe = onSnapshot(consulta, (snapshot)=>{
            cambiarAlarma(snapshot.docs.map((alarm) => {
                return{...alarm.data(), id: alarm.id}
            }));
        });

        return unsuscribe;
    }, [usuario])

    return [alarma];
}
 
export default useObtenerAlarma;