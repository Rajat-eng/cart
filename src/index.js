import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'; 

const firebaseConfig = {
  apiKey: "AIzaSyBuuH83WfOTUHh8DoaCU9idcCTXUPakoiY",
  authDomain: "cart-d779e.firebaseapp.com",
  projectId: "cart-d779e",
  storageBucket: "cart-d779e.appspot.com",
  messagingSenderId: "412763616382",
  appId: "1:412763616382:web:59667f02046ba09ae3542f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
