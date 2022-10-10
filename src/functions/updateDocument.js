import { updateDoc, doc } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";

export const updateDocument = (id, cant) => {
  const productRef = doc(db, "products", id);
  updateDoc(productRef, { stock: productRef.cant - cant }).then((res) =>
    console.log(res)
  );
};
