import { db } from "./firebaseConfig";
import { doc, deleteDoc } from "firebase/firestore";

const eliminarAlarma = async (id) => {
    return await deleteDoc(doc(db, 'alarmas', id));
}
 
export default eliminarAlarma;