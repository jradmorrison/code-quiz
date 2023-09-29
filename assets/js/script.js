// ============= Defining elements as variables ===========================
var headEl = document.getElementById('header');
var highScoresEl = document.getElementById('high-scores');
var timerEl = document.getElementById('timer');
var h1El = document.getElementById('h1');
var h2El = document.getElementById('h2');
var btnEl = document.getElementById('start');

var title = `Coding Quiz Challenge`;
h2El.innerHTML = `Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!`;

var question = [
    {question: '1', answer: '1', allAnswers: '1,2,3,4'},
    {question: '2', answer: '2', allAnswers: '1,2,3,4'},
    {question: '3', answer: '3', allAnswers: '1,2,3,4'},
    {question: '4', answer: '4', allAnswers: '1,2,3,4'},
    {question: '5', answer: '5', allAnswers: '1,2,3,4'},
]

var questionIndex = 0;
var secondsLeft = 60;

headEl.setAttribute('style', 'padding: 20px; font-size: 24px; display: flex; width: 100vw; justify-content: space-between; position:absolute; top:0;');
h1El.setAttribute('style', 'text-align:center;');
h2El.setAttribute('style', 'text-align:center; font-size:200%;');
btnEl.setAttribute('style', 'width: 150px; font-size:125%; color:white; background:#351C75; border: 0; padding: 10px 0; border-radius:5px; margin:30px auto;');

h1El.innerHTML = title;

function startQuiz() {
    console.log(`Quiz Started`);
    startTimer();
}



function startTimer() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timerEl.innerHTML = `Time Left: ${secondsLeft}`;
  
      if(secondsLeft === 0) {
       
        clearInterval(timerInterval);
        sendMessage();
      }
  
    }, 1000);
  }
  
  // Function to create and append colorsplosion image
  function sendMessage() {
      console.log(`Times Up!`)
  }

btnEl.addEventListener('click', startQuiz())