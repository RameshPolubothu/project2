import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = { 
    apiKey: "AIzaSyAvxSR-WxwAxw9Aitm2podwgr0Wty05ydI",
    authDomain: "task2-ad079.firebaseapp.com",
    projectId: "task2-ad079",
    storageBucket: "task2-ad079.appspot.com",
    messagingSenderId: "501844345291",
    appId: "1:501844345291:web:7592dd17ebe81a1c9df64e",
    measurementId: "G-KJJ72FQ0T7"
};


const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app); 