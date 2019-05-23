import * as firebase from "firebase/app";
import "firebase/database";
const config = {
  apiKey: "AIzaSyBqDT2JxcZ9YctEddnOxGv7wMh146z0YH8",
  authDomain: "thenotes-e31ee.firebaseapp.com",
  databaseURL: "https://thenotes-e31ee.firebaseio.com",
  projectId: "thenotes-e31ee",
  storageBucket: "thenotes-e31ee.appspot.com",
  messagingSenderId: "127312692112"
};
firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos");
