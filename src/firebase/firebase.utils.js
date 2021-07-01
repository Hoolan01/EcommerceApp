import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyBkOJb_0vl8gZSm7sHDuY1Ir4azsOaO924",
    authDomain: "ecom-db-290fb.firebaseapp.com",
    projectId: "ecom-db-290fb",
    storageBucket: "ecom-db-290fb.appspot.com",
    messagingSenderId: "518502276452",
    appId: "1:518502276452:web:ef96d9fc6dd7cc60e2ee71",
    measurementId: "G-KW97TNZ179",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
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
            console.log("error creating user, error.message");
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
