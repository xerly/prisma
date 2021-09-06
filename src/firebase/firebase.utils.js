import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyCb3TerHckdSAogdyRO9Ue9sRs-RibTzRY',
  authDomain: 'crwn-db-abfb5.firebaseapp.com',
  projectId: 'crwn-db-abfb5',
  storageBucket: 'crwn-db-abfb5.appspot.com',
  messagingSenderId: '1015576326024',
  appId: '1:1015576326024:web:e10ec79a3ff4c3b98e543d',
  measurementId: 'G-M3NT6D141Z',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
