// main.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADd4kbzNbTH2xKjcZOX6_jKGjY9OJkqxA",
  authDomain: "react-54100.firebaseapp.com",
  projectId: "react-54100",
  storageBucket: "react-54100.appspot.com",
  messagingSenderId: "47951824451",
  appId: "1:47951824451:web:3195d3a0acba8d7323f6f6",
  measurementId: "G-18KSYJRD68"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
