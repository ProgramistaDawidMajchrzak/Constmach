const scroll = new SmoothScroll('#arrow a[href*="#"]', {
    speed: 700
});
const sendingBtn = document.getElementById('sending-button');

sendingBtn.addEventListener('click', (e) => {
    const name = document.getElementById('first-name');
    const email = document.getElementById('second-input');
    const message = document.getElementById('message-input');
    e.preventDefault();
    if (name.value === '') {
        alert("Wpisz swoje Imię!");
    } else if (email.value === '') {
        alert("Wpisz swój adres E-mail!");
    } else if (message.value === '') {
        alert("Wpisz wiadomość!");
    } else {
        sendingBtn.textContent = 'Czekaj...';
        sendingBtn.style.padding = '5px 15px'

        let params = {
            user_id: '9NkTETZrWB0pc6vy_',
            service_id: 'service_su29xnn',
            template_id: 'template_5pss8km',
            template_params: {
                'name': name.value,
                'message': message.value,
                'email': email.value
            }
        };

        let headers = {
            'Content-type': 'application/json'
        };

        let options = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(params)
        };

        fetch('https://api.emailjs.com/api/v1.0/email/send', options)
            .then((httpResponse) => {
                if (httpResponse.ok) {
                    console.log('Your mail is sent!');
                } else {
                    return httpResponse.text()
                        .then(text => Promise.reject(text));
                }
            })
            .catch((error) => {
                console.log('Oops... ' + error);
            });

        setInterval(() => {
            sendingBtn.textContent = 'Wysłano';
            name.value = '';
            email.value = '';
            message.value = '';
        }, 2000)
    }

})

// sendingBtn.addEventListener('click', (e) => {
//     e.preventDefault();
//     sendingBtn.textContent = 'Czekaj...';
//     sendingBtn.style.padding = '5px 15px'

//     let name = document.getElementById('first-name').value;
//     let email = document.getElementById('second-input').value;
//     let message = document.getElementById('message-input').value;


//     let params = {
//         user_id: 'user_L1OauPxwE4IkKaDjV2sYM',
//         service_id: 'service_fa2r0jy',
//         template_id: 'template_b2xbxyz',
//         template_params: {
//             'name': name,
//             'message': message,
//             'email': email
//         }
//     };

//     let headers = {
//         'Content-type': 'application/json'
//     };

//     let options = {
//         method: 'POST',
//         headers: headers,
//         body: JSON.stringify(params)
//     };

//     fetch('https://api.emailjs.com/api/v1.0/email/send', options)
//         .then((httpResponse) => {
//             if (httpResponse.ok) {
//                 console.log('Your mail is sent!');
//             } else {
//                 return httpResponse.text()
//                     .then(text => Promise.reject(text));
//             }
//         })
//         .catch((error) => {
//             console.log('Oops... ' + error);
//         });


//     console.log('siema')

//     setInterval(() => {
//         sendingBtn.textContent = 'Wysłano';
//     }, 2000)
// })