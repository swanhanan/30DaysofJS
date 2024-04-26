

function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    const myKey = document.querySelector(`div[data-key="${e.key}"]`);
    myKey.classList.add("playing");
    audio.play();
};

function removeCl(e){
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
 
}

const allKeys =document.querySelectorAll('.key');
allKeys.forEach(key => key.addEventListener('transitionend', removeCl));
document.addEventListener("keypress", playSound);


            
    

