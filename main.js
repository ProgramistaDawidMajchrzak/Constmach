const scroll = new SmoothScroll('#arrow a[href*="#"]', {
    speed: 700
});
const sendingBtn = document.getElementById('sending-button');

sendingBtn.addEventListener('click', (e) => {
    e.preventDefault();
    sendingBtn.textContent = 'Wysłano';
    sendingBtn.style.padding = '5px 15px'
    alert('Wysłano')
})