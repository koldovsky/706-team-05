const button = document.getElementById('footer-button-submit');

button.addEventListener('click', function (e) {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let ripples = document.createElement('span');
    ripples.style.left = x + 'px';
    ripples.style.top = 50 + 'px';
    this.appendChild(ripples);

    setTimeout(() => {
ripples.remove()
    }, 1000);
});