import firebase from "firebase";
import 'firebase/firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCqk-vOtytmUcL7WepEkJ5e5aiNqYIecvM",
    authDomain: "coderreactjs.firebaseapp.com",
    projectId: "coderreactjs",
    storageBucket: "coderreactjs.appspot.com",
    messagingSenderId: "177683595657",
    appId: "1:177683595657:web:5e7b7656e9a3fe5d996158"
  }

  const app = firebase.initializeApp(firebaseConfig)

  export function getFirestore() {
      return firebase.firestore(app)
  }