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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`user/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
