import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbpe55V5eFYVduw__Fz5MoSMvXUM94_fY",
  authDomain: "react-hooks-blog-d8e77.firebaseapp.com",
  projectId: "react-hooks-blog-d8e77",
  storageBucket: "react-hooks-blog-d8e77.appspot.com",
  messagingSenderId: "238164002347",
  appId: "1:238164002347:web:12dc44b6a99498f5becc6e",
};

const app = initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
