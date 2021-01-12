import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCBeZtl2iyK-X2J0fnXSyM3d7PF8yNQnw4",
  authDomain: "linkedin-clone-c60fa.firebaseapp.com",
  projectId: "linkedin-clone-c60fa",
  storageBucket: "linkedin-clone-c60fa.appspot.com",
  messagingSenderId: "1012337065353",
  appId: "1:1012337065353:web:7757f0996141557ec6b558",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };