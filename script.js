 /****************************
  * Memory game 
  ****************************/

 const cards = document.querySelectorAll('.memory-card');
const para = document.querySelector('.aMatch');
const message1 = document.querySelector(".message1");
const message2 = document.querySelector(".message2");
 let hasFlippedCard = false;
let lockBoard = false;
 let firstCard, secondCard;
 let score = 1;

 function flipCard() {
   if (lockBoard) return;
   if(this === firstCard) return;
   this.classList.add('flip');

   if (!hasFlippedCard) {
     hasFlippedCard = true;
     firstCard = this;
     return;
     
   }

   secondCard = this;
  // hasFlippedCard = false;

   checkForMatch();
 }

 function checkForMatch() {
   let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
   isMatch ? disableCards() : unflipCards();
  
   
 }

//if card is a match add one to the score
 function disableCards() {
   firstCard.removeEventListener('click', flipCard);
   secondCard.removeEventListener('click', flipCard);
   para.innerHTML = score++;
   resetBoard();
 }

 function unflipCards() {
    lockBoard = true;

   setTimeout(() => {
     firstCard.classList.remove('flip');
     secondCard.classList.remove('flip');
 resetBoard();
   // lockBoard = false;
   }, 1500);
 }

 function resetBoard() {
[hasFlippedCard,lockBoard] = [false, false];
[firstCard. secondCard] = [null, null];

 }
  // timer
  let minutesLabel = document.getElementById("minutes");
  let secondsLabel = document.getElementById("seconds");
  let totalSeconds = 100;
  let x = setInterval(setTime, 1000);
  
  // time countdowns and stops at zero 
  //show game over message with red background
  function setTime() {
    --totalSeconds;
    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
    if (totalSeconds <= 0 ){
      clearInterval(x);
      
      message1.style.backgroundColor = "red";
      message2.style.backgroundColor = "red";
      message1.innerHTML = "Game";
      message2.innerHTML = "Over";
    } else if (score === 7 ) {
      clearInterval(x);
      message1.style.backgroundColor = "green";
      message2.style.backgroundColor = "green";
      message1.innerHTML = "You ";
      message2.innerHTML = "Won";
    }
  }
  

  function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
      return "0" + valString;
    } else {
      return valString;
    }
  }

 (function shuffle() {
     cards.forEach(card => {
       let ramdomPos = Math.floor(Math.random() * 12);
       card.style.order = ramdomPos;
     });
   })();
 cards.forEach(card => card.addEventListener('click', flipCard));
