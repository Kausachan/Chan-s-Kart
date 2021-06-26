import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = { 
    apiKey: "AIzaSyCe020pJDMT52EYQaCJAMKeucuWxiks9Go",
    authDomain: "e-commerece-a7390.firebaseapp.com",
    projectId: "e-commerece-a7390",
    storageBucket: "e-commerece-a7390.appspot.com",
    messagingSenderId: "242081029621",
    appId: "1:242081029621:web:93f8dc052469faec2114bc",
    measurementId: "G-2SC42QV4H3"
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