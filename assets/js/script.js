/*

== variables to keep track of game state ==

current question
time remaining


submit button dom element
timer element
answers to choose from
score - can just be tied in with timer


function to pull question from questions array
assign all answers to a button by looping over the choice array
compare choice selected against answer

function for click event

if statement it matches the answer, then you move on to the next question, else decrement time the timer

save highscore to local storage

call highscores from a button on homepage
sort high scores to decending order

*/

// =========================== Defining elements as variables ==============================
var headEl = document.getElementById('header');
var highScoresEl = document.getElementById('high-scores');
var timerEl = document.getElementById('timer');
var h1El = document.getElementById('h1');
var h2El = document.getElementById('h2');
var btnEl = document.getElementById('start');
var olEl = document.querySelector('.choices')
var choiceA = document.getElementById('a');
var choiceB = document.getElementById('b');
var choiceC = document.getElementById('c');
var choiceD = document.getElementById('d');

// ================================= Other variables =========================================
var heading = `Coding Quiz Challenge`;
h2El.innerHTML = `Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!`;


var allQuestions = jsQuestions;
var questionIndex = 0;
var secondsLeft = 60;

// ===================================== Element styling ==================================

// ====================================== Functions ======================================

// =============== Function for Landing page ======================
function init() {

  h1El.innerHTML = heading;
  h2El.innerHTML = `Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!`;
  btnEl.addEventListener('click', startQuiz)
}

// ================ Function for starting the quiz =================
function startQuiz() {
    console.log(`Quiz Started`);
    startTimer();
    h1El.innerHTML = 'question 1'
    h2El.innerHTML = '';
    highScoresEl.setAttribute('style', 'display:none;')
    btnEl.setAttribute('style', 'display:none;')
    olEl.setAttribute('style', 'display:block;')

}

// =================== Function for timer ==============================
function startTimer() {

    var timerInterval = setInterval(function() {
      secondsLeft--;
      timerEl.innerHTML = `Time Left: ${secondsLeft}`;
  
      if(secondsLeft === 0) {
       
        clearInterval(timerInterval);
        sendMessage();
      }
  
    }, 1000);
}

// ============= Function to send message that time is up ======================
function sendMessage() {
      console.log(`Times Up!`)
      h1El.innerHTML = `Times Up!`
}


init();
