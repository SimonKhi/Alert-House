import { db } from "./firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";

const editarSensor = async ({id, nombre, acceso}) => {
    const sensor = doc(db, 'sensores', id)

    return await updateDoc(sensor, {
        acceso: acceso,
        nombre: nombre,
    });
}
 
export default editarSensor;