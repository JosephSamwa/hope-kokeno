// script.js
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
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

document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        // Implement your login logic here
        await signInWithEmailAndPassword(auth, email, password);
        Swal.fire({
            icon: 'success',
            title: 'Login Successful!',
            text: 'Welcome back!',
        });
        // Redirect to dashboard or desired page
        window.location.href = '/dashboard.html';
    } catch (error) {
        console.error('Error signing in:', error.message);
        Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: 'Invalid credentials. Please try again.',
        });
    }
});

document.getElementById('forgot-password-link').addEventListener('click', () => {
    Swal.fire({
        icon: 'info',
        title: 'Forgot Password?',
        text: 'Enter your email to reset your password:',
        input: 'email',
        inputPlaceholder: 'Enter your email',
        showCancelButton: true,
        confirmButtonText: 'Reset Password',
        cancelButtonText: 'Cancel',
    }).then((result) => {
        if (result.isConfirmed) {
            // Implement password reset logic here (e.g., send reset email)
        auth.sendPasswordResetEmail(result.value);
            Swal.fire({
                icon: 'success',
                title: 'Password Reset Email Sent!',
                text: 'Check your inbox for instructions.',
            });
        }
    });
});
