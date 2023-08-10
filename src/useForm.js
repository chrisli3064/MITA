import { useState, useEffect } from 'react'
import firebase from 'firebase'
// Import the functions you need from the SDKs you need
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
const useForm = (validate,submit) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };
  useEffect(() => {
    const { firstname, lastname, email } = values; // Destructure values object
    if (Object.keys(errors).length === 0 && isSubmitting) {
      mitaFormDB
        .push({
          firstname: firstname,
          lastname: lastname,
          email: email
        })
        .then(() => {
          setValues({
            firstname: '',
            lastname: '',
            email: ''
          });
          submit(); // Reset submitted state after successful submission
        })
        .catch((error) => {
          alert(error.message);
        });
    }
    console.log(errors);
  }, [errors]); // Include submitted state in the dependency array
  

  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true)
  };

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
