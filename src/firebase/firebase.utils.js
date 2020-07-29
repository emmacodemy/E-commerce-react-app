import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =    {
    apiKey: "AIzaSyDFvmhY1ykKFY-rKzFkT2U_BPRCPAoOwQE",
    authDomain: "crown-db-4f11c.firebaseapp.com",
    databaseURL: "https://crown-db-4f11c.firebaseio.com",
    projectId: "crown-db-4f11c",
    storageBucket: "crown-db-4f11c.appspot.com",
    messagingSenderId: "1047985457403",
    appId: "1:1047985457403:web:c8ad2d33d5666a9bd3085e",
    measurementId: "G-W8Z07TSGL3"
  };
// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;