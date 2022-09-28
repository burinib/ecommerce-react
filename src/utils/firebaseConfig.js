// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDayhm4ywswjMMQ3l2T9ldVMBYlZUxjaOo",
  authDomain: "react-ecommerce-bba92.firebaseapp.com",
  projectId: "react-ecommerce-bba92",
  storageBucket: "react-ecommerce-bba92.appspot.com",
  messagingSenderId: "371549263894",
  appId: "1:371549263894:web:ef1a9046ab8419eb2d7d37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const firestoreFetch = async () => { 
    const querySnapshot = await getDocs(collection(db, "products"));
    const dataFromFirestore = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }) )
    return dataFromFirestore    
}