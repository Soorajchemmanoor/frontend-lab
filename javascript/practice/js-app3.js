function roll(){
    let dice = document.getElementById('dice');
    let random = Math.floor(Math.random()*6)+1;
    let audio = document.getElementById('diceAudio');
    audio.play()
    dice.classList.add('spin');
    dice.innerText = random;
    setTimeout(()=>{
        dice.classList.remove('spin');
        
    },1000);

}