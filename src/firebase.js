import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCznbIBIASFcHliJJbApTs2Ongj6M7pm6c",
  authDomain: "ajaiportfolio.firebaseapp.com",
  databaseURL: "https://ajaiportfolio.firebaseio.com",
  projectId: "ajaiportfolio",
  storageBucket: "ajaiportfolio.appspot.com",
  messagingSenderId: "925785556646",
  appId: "1:925785556646:web:668576b08e54d3ed59d667",
  measurementId: "G-VZJRGLNQ93",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
