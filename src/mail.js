// Import the functions you need from the SDKs you need
import firebase from 'firebase'
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCysQ_rrU1eGcTclQXvjuQE4yB6rMCd1Ys",
  authDomain: "mita-ab76d.firebaseapp.com",
  databaseURL: "https://mita-ab76d-default-rtdb.firebaseio.com",
  projectId: "mita-ab76d",
  storageBucket: "mita-ab76d.appspot.com",
  messagingSenderId: "625152551538",
  appId: "1:625152551538:web:c608fcbf0a34feaaee70eb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var mitaFormDB = firebase.database().ref('mitaForm')

document.getElementsById('contactForm').addEventListneer('submit',submitForm)
