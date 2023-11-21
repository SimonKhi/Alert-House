import { db } from "./firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";

const agregarAlarma = (uidUsuario) => {
    const nuevo_id = 'alarma-'.concat(uidUsuario.substring(0,15));

    const Espera = async() => {
        const existe = await getDoc(doc(db, 'alarma', nuevo_id));

        // Si la alarma ya esta en bd, no la creamos
        if(existe.exists()){
            return;
        } else {
            return setDoc(doc(db, 'alarma', nuevo_id), {
                enabled: 1,
                uidUsuario: uidUsuario,
            })
        }
    }

    return Espera();
}
 
export default agregarAlarma;