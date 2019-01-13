const playAudio = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    //stop if there is no audio --> resolve the console problems of null!
    if (!audio) return;

    //playing over and over again
    audio.currentTime = 0;
    //running playing
    audio.play();

    //adding class
    key.classList.add('playing')
}

window.addEventListener('keydown', playAudio);

function removeTransition(e) {
    if (e.propertyName === 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));


keys.forEach(key => key.addEventListener('click', function () {
    const audio = document.querySelector(`audio[data-key="${key.dataset.key}"]`);

    if (!audio) return;

    audio.currentTime = 0;
    audio.play();

    key.classList.add('playing')
}));