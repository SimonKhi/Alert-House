import { db } from './firebaseConfig';
import { doc, updateDoc } from 'firebase/firestore';

const actualizarCondiciones = async ({id, estado, enabled}) => {
    // const documento = doc(db, 'sensores', id);

    // return await updateDoc(documento, {
    //     estado: estado,
    //     enabled: enabled
    // })
}

export default actualizarCondiciones;