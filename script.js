'use strict'

let secretNumber = Math.floor(Math.random()*20)+1;
let score = 20;
let highscore = 0;

console.log(secretNumber);


function displayMessage(msg){
    document.querySelector('.message').textContent = msg
}

document.querySelector('.again').addEventListener('click', function(){
    window.location.reload();
    
});

document.querySelector('.check').addEventListener('click', function(){
    const guess = document.querySelector('.guess').value

    if (guess < 1 || guess >20){
        displayMessage('Invalid Input!')
    }

    else if(guess == secretNumber){
        displayMessage('Correct Number')
        document.querySelector('.number').textContent = secretNumber
        document.body.style.background = "#34CC17";

        if(score > highscore){
            highscore = score
            document.querySelector('.highscore').textContent = highscore
        }
    }

    else if (guess !== Number){
        if(score > 1){
            displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low')
            score++;
            document.querySelector('.score').textContent = score
        }
        else{
            displayMessage('You lost the game!');
            document.querySelector('.score').textContent=0;
        }
    }
});



//copyright rights

const disabledKeys = ["c", "C", "x", "J", "u", "I"]; // keys that will be disabled
  const showAlert = e => {
    e.preventDefault(); // preventing its default behaviour
    return alert("Bağışlayın, Siz bu saytın yazılarını və kodlarını köçürə bilməssiniz!");
  }
  document.addEventListener("contextmenu", e => {
    showAlert(e); // calling showAlert() function on mouse right click
  });
  document.addEventListener("keydown", e => {
    // calling showAlert() function, if the pressed key matched to disabled keys
    if((e.ctrlKey && disabledKeys.includes(e.key)) || e.key === "F12") {
      showAlert(e);
    }});