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


    let params = {
        user_id: 'user_L1OauPxwE4IkKaDjV2sYM',
        service_id: 'service_fa2r0jy',
        template_id: 'template_b2xbxyz',
        template_params: {
            'name': name,
            'message': message,
            'email': email
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


    console.log('siema')

    setInterval(() => {
        sendingBtn.textContent = 'Wysłano';
    }, 2000)
})