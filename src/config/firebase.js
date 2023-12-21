import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth , GoogleAuthProvider} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyC6wzWbQ7Nlq_33xG7znJCmPlkvvoYobM4",
    authDomain: "enzimeshop.firebaseapp.com",
    projectId: "enzimeshop",
    storageBucket: "enzimeshop.appspot.com",
    messagingSenderId: "382834272844",
    appId: "1:382834272844:web:6c056f203ab3becdb722e9"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider(); 