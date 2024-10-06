document.addEventListener('DOMContentLoaded', () => {
    const leftDoor = document.querySelector('.left-door');
    const rightDoor = document.querySelector('.right-door');
    const container = document.querySelector('.container');
    const contentFrame = document.getElementById('content-frame');

    let isOpen = false;

    function toggleDoors() {
        if (isOpen) {
            leftDoor.classList.remove('open-left');
            rightDoor.classList.remove('open-right');
            contentFrame.style.display = 'none';
            contentFrame.src = 'about:blank';
        } else {
            leftDoor.classList.add('open-left');
            rightDoor.classList.add('open-right');
            setTimeout(() => {
                contentFrame.style.display = 'block';
                contentFrame.src = '../flowers/index.html';
            }, 1500); // Tunggu animasi pintu selesai (1.5 detik)
        }
        isOpen = !isOpen;
    }

    container.addEventListener('click', toggleDoors);
});