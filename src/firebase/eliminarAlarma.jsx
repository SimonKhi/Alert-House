import { db } from "./firebaseConfig";
import { doc, deleteDoc } from "firebase/firestore";

const eliminarAlarma = async (id) => {
    return await deleteDoc(doc(db, 'alarma', id));
}
 
export default eliminarAlarma;