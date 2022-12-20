
const body = document.querySelector('body');
const keys = document.querySelector('.keys');
const sepKeys = document.querySelectorAll('.key');
const bars = document.querySelector('.bars');
const sepBars = document.querySelectorAll('.bar');

//event listener to get pressed key and activate targeted audio and animation
window.addEventListener('keydown', function(event) {
    const keyCode = event.keyCode;
    playSound(keyCode);

})


//adding event listener to remove animation class after animation is completed
sepKeys.forEach(key => { 
    key.addEventListener('transitionend', function () {
        key.classList.remove('playing');
    })  
})

//adding event listener to remove animation class after animation is completed
sepBars.forEach(key => { 
    key.addEventListener('transitionend', function () {
        key.classList.remove('playing');
    })  
})

//checks if keycode is valid, then calls animation function and plays sound
function playSound(keyCode) {
    const audio = document.querySelector(`audio[data-key="${keyCode}"`);
    if (!audio) {
        return
    }

    doAnimation(keyCode)
    audio.currentTime = 0;
    audio.play();
    
}
//adds the "playing" class to animate div
function doAnimation(keyCode) {
    const key = document.querySelector(`div[data-key="${keyCode}"]`);
    key.classList.add('playing');

}