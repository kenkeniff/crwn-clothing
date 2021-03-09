import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


   const config = {
    apiKey: "AIzaSyDrnrbwiH0ePUeuWEafKFmN4eNYapo2xiI",
    authDomain: "crwn-db-6c687.firebaseapp.com",
    databaseURL: "https://crwn-db-6c687.firebaseio.com",
    projectId: "crwn-db-6c687",
    storageBucket: "crwn-db-6c687.appspot.com",
    messagingSenderId: "663557544649",
    appId: "1:663557544649:web:4d8dd35e96d007cbdccb18",
    measurementId: "G-CBXQMNPNHS"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;