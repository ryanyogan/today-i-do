import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  apiKey: "AIzaSyBjhbVFY8zJ99xhzFsz6GgtrhDDAvHk5iY",
  authDomain: "today-ca783.firebaseapp.com",
  projectId: "today-ca783",
  storageBucket: "today-ca783.appspot.com",
  messagingSenderId: "129815314901",
  appId: "1:129815314901:web:d13972e9810a49ff76fd5c",
  measurementId: "G-3374YKH0TL",
};

const firebase = initializeApp(firebaseConfig);

export default firebase;
