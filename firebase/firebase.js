import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

if(!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyCZw3Pz12wwXSzwTzZgOmyu9cinNq4hfiY",
        authDomain: "achievely-c9638.firebaseapp.com",
        projectId: "achievely-c9638",
        storageBucket: "achievely-c9638.appspot.com",
        messagingSenderId: "10573835882",
        appId: "1:10573835882:web:2f3d0fd32b2af24900a413",
        measurementId: "G-6C8D3KWM7H"
    });
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();