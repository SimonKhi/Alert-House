import { db } from "./firebaseConfig";
import { doc, deleteDoc } from "firebase/firestore";

const eliminarSensor = async (id) => {
    return await deleteDoc(doc(db, 'sensores', id));
}
 
export default eliminarSensor;