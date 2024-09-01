// firebase.config.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBdnfob7KyHni_eHGAobZ1X63WBSnSTNIQ",
    authDomain: "marblestone-5872a.firebaseapp.com",
    projectId: "marblestone-5872a",
    storageBucket: "marblestone-5872a.appspot.com",
    messagingSenderId: "218817842151",
    appId: "1:218817842151:web:73331eb12c786ff8c80b42"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);

export { auth, storage }; // Named exports


