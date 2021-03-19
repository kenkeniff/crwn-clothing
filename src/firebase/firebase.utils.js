import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


   const firebaseConfig = {
    apiKey: "AIzaSyDrnrbwiH0ePUeuWEafKFmN4eNYapo2xiI",
    authDomain: "crwn-db-6c687.firebaseapp.com",
    databaseURL: "https://crwn-db-6c687.firebaseio.com",
    projectId: "crwn-db-6c687",
    storageBucket: "crwn-db-6c687.appspot.com",
    messagingSenderId: "663557544649",
    appId: "1:663557544649:web:4d8dd35e96d007cbdccb18",
    measurementId: "G-CBXQMNPNHS"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);

      }
    }

    return userRef;
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;