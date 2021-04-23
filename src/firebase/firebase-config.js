import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAudu3LkomB0467oSfu9YooJnf-6c1nh84",
    authDomain: "chuckwudi-app.firebaseapp.com",
    projectId: "chuckwudi-app",
    storageBucket: "chuckwudi-app.appspot.com",
    messagingSenderId: "768351138817",
    appId: "1:768351138817:web:5726e04872013b252ebc00"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}