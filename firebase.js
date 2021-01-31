// database/firebaseDb.js

import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB5cXm5eaRhuExvHFJAvqbOxDX3At6jVME",
    authDomain: "rn-lab-3.firebaseapp.com",
    projectId: "rn-lab-3",
    storageBucket: "rn-lab-3.appspot.com",
    messagingSenderId: "455590606985",
    appId: "1:455590606985:web:ae17c3e508a52ec48aee58"
  };

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;