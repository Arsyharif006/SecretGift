const berankas = document.querySelector('.berankas');
const passwordInput = document.getElementById('password');
const openBtn = document.getElementById('open-btn');
const chest = document.querySelector('.chest');

openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const password = passwordInput.value;
    if (password === '202410') {
        chest.src = 'image2.png';
        setTimeout(() => {
            window.location.href = 'Door/door.html';
        }, 500);
    } else {
        alert('The password is wrong! dont make me angry and tell you the password (202410)');
    }
});