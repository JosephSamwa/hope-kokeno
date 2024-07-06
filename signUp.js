
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Swal from 'sweetalert2'; // Import SweetAlert library

const firebaseConfig = {
    apiKey: "AIzaSyAujFKDx_T7ZSEyYGmvbdhkmn8SdKCNXjs",
    authDomain: "hope-kokeno-cbo.firebaseapp.com",
    databaseURL: "https://hope-kokeno-cbo-default-rtdb.firebaseio.com",
    projectId: "hope-kokeno-cbo",
    storageBucket: "hope-kokeno-cbo.appspot.com",
    messagingSenderId: "508964589142",
    appId: "1:508964589142:web:33a4d190a497bb5ecab5f7"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('registration-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        await createUserWithEmailAndPassword(auth, email, password);
        // Show success alert
        Swal.fire({
            icon: 'success',
            title: 'Registration Successful!',
            text: 'You can now log in.',
        });
    } catch (error) {
        console.error('Error registering user:', error.message);
        // Show error alert
        Swal.fire({
            icon: 'error',
            title: 'Registration Failed',
            text: 'Please try again later.',
        });
    }
});
