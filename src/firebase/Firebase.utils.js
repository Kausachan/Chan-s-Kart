import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = { 
    apiKey: "AIzaSyCg3zjpHytuIPhFcXc_WPgp3w7T9Rohb-8",
    authDomain: "chan-s-kart.firebaseapp.com",
    projectId: "chan-s-kart",
    storageBucket: "chan-s-kart.appspot.com",
    messagingSenderId: "65606877853",
    appId: "1:65606877853:web:6142a4e238c6e9a2148a74",
    measurementId: "G-CLQGMXRKMX"
  };


 export const createUserProfileDocument = async (userAuth, additionalData) =>{
  if(!userAuth) return;
    const userRef = await firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();
    if(!snapShot.exists)
    {
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }
      catch(err){
        console.log("error")
      }
    }
    return userRef;
  }

if (!firebase.apps.length) {
   firebase.initializeApp(config);
}else {
   firebase.app(); // if already initialized, use that one
}

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt : 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider); // function

  export default firebase;