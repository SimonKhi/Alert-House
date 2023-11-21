import { db } from './firebaseConfig';
import { doc, updateDoc } from 'firebase/firestore';

const actualizarSensor = async ({id, enabled}) => {
    const documento = doc(db, 'sensores', id);

    return await updateDoc(documento, {
        enabled: enabled,
    })
}

const actualizarControl = async ({id, estado}) => {
    const documento = doc(db, 'sensores', id);

    return await updateDoc(documento, {
        estado: estado,
    })
}

const actualizarAlarma = async ({id, enabled}) => {
    const documento = doc(db, 'alarma', id);

    return await updateDoc(documento, {
        enabled: enabled,
    })
}

export { actualizarSensor, actualizarControl, actualizarAlarma };