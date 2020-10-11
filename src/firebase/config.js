import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCy1esjmxpkZqhpfyFRMli-SC82Un0h8m0",
  authDomain: "firegram-project-9a938.firebaseapp.com",
  databaseURL: "https://firegram-project-9a938.firebaseio.com",
  projectId: "firegram-project-9a938",
  storageBucket: "firegram-project-9a938.appspot.com",
  messagingSenderId: "806351427008",
  appId: "1:806351427008:web:081f371c04e7f1cd6aa425",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize storage
const projectStorage = firebase.storage();

// Initialize firestore
const projectFirestore = firebase.firestore();

// Initialize Timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
