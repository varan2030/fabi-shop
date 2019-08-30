import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { unionWith } from 'eslint-visitor-keys';

const config = {
    apiKey: "AIzaSyBeKkZbBIVUQsbbw8w1W9gCTiDYCtQL_Hc",
    authDomain: "fabi-shop-6ac90.firebaseapp.com",
    databaseURL: "https://fabi-shop-6ac90.firebaseio.com",
    projectId: "fabi-shop-6ac90",
    storageBucket: "",
    messagingSenderId: "958433479828",
    appId: "1:958433479828:web:938f074cc3b97501"
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;