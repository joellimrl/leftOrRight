const startButton = document.getElementById('startButton');
const leftDiv = document.getElementById('left');
const rightDiv = document.getElementById('right');

let flickerCount = 0; // Ensure flickerCount is initialized
let flickerInterval = 300; // Ensure flickerInterval is initialized
let randomBoolean = Math.random() >= 0.5;

function flicker() {
    if (flickerCount >= 20) {
        let x = 0.5;
        if (randomBoolean) {
            leftDiv.style.backgroundColor = 'rgba(13, 146, 244, 0.9)';
            rightDiv.style.backgroundColor = 'rgba(199, 37, 62, 0.3)';
            x = 0.28;
        } else {
            leftDiv.style.backgroundColor = 'rgba(13, 146, 244, 0.3)';
            rightDiv.style.backgroundColor = 'rgba(199, 37, 62, 0.9)';
            x = 0.72;
        }    
        // eslint-disable-next-line no-undef
        confetti({ // confetti 
            particleCount: 300,
            spread: 140,
            origin: { y: 0.6, x }
        });
    } else {
        if (flickerCount % 2 === 0) {
            leftDiv.style.backgroundColor = 'rgba(13, 146, 244, 0.9)';
            rightDiv.style.backgroundColor = 'rgba(199, 37, 62, 0.3)';
        } else {
            leftDiv.style.backgroundColor = 'rgba(13, 146, 244, 0.3)';
            rightDiv.style.backgroundColor = 'rgba(199, 37, 62, 0.9)';
        }
        flickerCount++;
        flickerInterval = Math.max(50, flickerInterval - 25); // Decrease interval but not less than 50ms
        setTimeout(flicker, flickerInterval);
    }
}

startButton.addEventListener('click', function() {
    flickerCount = 0;
    flickerInterval = 300;
    randomBoolean = Math.random() >= 0.5;
    setTimeout(flicker, flickerInterval);
});
