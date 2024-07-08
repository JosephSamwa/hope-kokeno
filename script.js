const firebaseConfig = {
    apiKey: "AIzaSyAujFKDx_T7ZSEyYGmvbdhkmn8SdKCNXjs",
    authDomain: "hope-kokeno-cbo.firebaseapp.com",
    databaseURL: "https://hope-kokeno-cbo-default-rtdb.firebaseio.com",
    projectId: "hope-kokeno-cbo",
    storageBucket: "hope-kokeno-cbo.appspot.com",
    messagingSenderId: "508964589142",
    appId: "1:508964589142:web:33a4d190a497bb5ecab5f7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference your database
var contactFormDB = firebase.database().ref("HOPE KOKENO-CBO MEMBERS");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var phone = getElementVal("phone");
    var gender = getElementVal("gender");

    registerUser(name, emailid, phone, gender);
    showConfirmation();
    hideForm();
    // Reset the form
    document.getElementById("contactForm").reset();
}

const registerUser = (name, emailid, phone, gender) => {
    var newContactForm = contactFormDB.push();

    // Add timestamp
    const date = new Date();
    const day = date.getDate();
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;

    const formattedTime = `${day} ${month} ${year} || ${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;

    newContactForm.set({
        NAME: name,
        EMAIL: emailid,
        PHONE: phone,
        GENDER: gender,
        TIMESTAMP: formattedTime, // Use the formatted timestamp
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};

function showConfirmation() {
    // Show a success message
    Swal.fire({
        icon: 'success',
        title: 'Registration Successful',
        text: 'Thank you for registering!',
        confirmButtonText: 'OK'
    }).then(() => {
        // Redirect or perform any other action after the user clicks OK
        // For example, you can redirect to another page:
        window.location.href = 'index.html';
    });
}
