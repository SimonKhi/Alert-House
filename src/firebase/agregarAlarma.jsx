import { db } from "./firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";

const agregarAlarma = async (uidUsuario) => {
    const nuevo_id = 'alarma-'.concat(uidUsuario.substring(0,15));

    const existe = await getDoc(doc(db, 'alarmas', nuevo_id));

    // Si la alarma ya esta en bd, no la creamos
    if(existe.exists()){
        return;
    } else {
        return setDoc(doc(db, 'alarmas', nuevo_id), {
            enabled: 1,
            uidUsuario: uidUsuario,
        })
    }
}
 
export default agregarAlarma;