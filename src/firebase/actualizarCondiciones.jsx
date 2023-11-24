import { db } from './firebaseConfig';
import { doc, updateDoc } from 'firebase/firestore';

const actualizarSensor = async ({id, enabled}) => {
    const sensor = doc(db, 'sensores', id);

    return await updateDoc(sensor, {
        enabled: enabled,
    })
}

const actualizarControl = async ({id, estado}) => {
    const sensor = doc(db, 'sensores', id);

    return await updateDoc(sensor, {
        estado: estado,
    })
}

const actualizarAlarma = async ({id, enabled}) => {
    const alarma = doc(db, 'alarmas', id);

    return await updateDoc(alarma, {
        enabled: enabled,
    })
}

export { actualizarSensor, actualizarControl, actualizarAlarma };