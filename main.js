// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBNjhM8z60VSFHEsiUPHp6FRgknUVZfGmQ",
    authDomain: "constmachpartner-190de.firebaseapp.com",
    projectId: "constmachpartner-190de",
    storageBucket: "constmachpartner-190de.appspot.com",
    messagingSenderId: "598033659494",
    appId: "1:598033659494:web:b38c0e7ef02f2978cb5fa7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// References Infos
let contactInfo = firebase.database().ref("infos");

const scroll = new SmoothScroll('#arrow a[href*="#"]', {
    speed: 700
});
const sendingBtn = document.getElementById('sending-button');

sendingBtn.addEventListener('click', (e) => {
    e.preventDefault();
    sendingBtn.textContent = 'Czekaj...';
    sendingBtn.style.padding = '5px 15px'

    let name = document.getElementById('first-name').value;
    let email = document.getElementById('second-input').value;
    let message = document.getElementById('message-input').value;

    saveContactInfo(name, email, message);

    setInterval(() => {
        sendingBtn.textContent = 'Wysłano';
    }, 2000)
})

//Save infos to Firebase

function saveContactInfo(name, email, message) {
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
        name: name,
        email: email,
        message: message
    })
}