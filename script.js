let deg = 0;
let fromg = document.getElementById('fromg');
let bonk = new Audio('./bonk.mp3');
fromg.addEventListener('click', function() {
    deg += 45;
    if (deg >= 360) {
        deg = 0;
    }
    
    fromg.style.transform = 'rotate(' + deg + 'deg)';
    bonk.play();
    bonk.currentTime = 0;
})