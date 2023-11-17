import { db } from './firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const agregarSensor = ({acceso, nombre, uidUsuario}) => {
    return addDoc(collection(db, 'sensores'), {
        acceso: acceso,
        nombre: nombre,
        estado: 1,
        enabled: 0,
        uidUsuario: uidUsuario,
    })
}
 
export default agregarSensor;