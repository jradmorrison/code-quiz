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
var olEl = document.querySelector('.container')
var choiceA = document.getElementById('a');
var choiceB = document.getElementById('b');
var choiceC = document.getElementById('c');
var choiceD = document.getElementById('d');
var footEl = document.getElementById('footer');
var submitForm = document.querySelector('.form');
var input = document.getElementById('input');
var submitBtn = document.getElementById('submit');
var hiScoreDiv = document.querySelector('.high-scores');
var olEl = document.getElementById('ol');

// ================================= Global variables =========================================

var allQuestions = jsQuestions; 
var currentQuestion;
var questionIndex;
var secondsLeft = 60;
var score;
var initials;
var timerInterval;
var highScores = [];
var newHighScore = {initials, score};
var sortedHighScores = [];

// ====================================== Functions ======================================

// =============== Function for Landing page ======================
function init() {

  questionIndex = 0;
  h1El.innerHTML = `Coding Quiz Challenge`;
  h2El.innerHTML = `Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!`;
  btnEl.addEventListener('click', startQuiz);
  highScoresEl.addEventListener('click', showHighScores);

return };

// ================ Function for starting the quiz =================
function startQuiz() {
    console.log(`Quiz Started`);
    startTimer();
    
    h2El.innerHTML = '';
    btnEl.setAttribute('style', 'display:none;');
    olEl.setAttribute('style', 'display:flex;');
    generateQuestion();
};

// =================== Function for timer ==============================
function startTimer() {

    timerInterval = setInterval(function() {
      secondsLeft--;
      timerEl.innerHTML = `Time Left: ${secondsLeft}`;
  
      if(secondsLeft <= 0) {
       
        clearInterval(timerInterval);
        submitScore()
      }
  
    }, 1000)};


//  ================== Generate question ============================
function generateQuestion() {

  if (questionIndex < 5) {
    console.log(allQuestions)
    currentQuestion = allQuestions[questionIndex]
  
    console.log(currentQuestion)
    h1El.innerHTML = currentQuestion.title
  
    choiceA.innerHTML = currentQuestion.choices[0]
    choiceA.setAttribute('data-answer', currentQuestion.choices[0])
    choiceB.innerHTML = currentQuestion.choices[1]
    choiceB.setAttribute('data-answer', currentQuestion.choices[1])
    choiceC.innerHTML = currentQuestion.choices[2]
    choiceC.setAttribute('data-answer', currentQuestion.choices[2])
    choiceD.innerHTML = currentQuestion.choices[3]
    choiceD.setAttribute('data-answer', currentQuestion.choices[3])
  
    console.log(currentQuestion.answer)
    
    questionIndex++
    console.log(questionIndex)

    olEl.addEventListener('click', checkAnswer)
  } else {
    clearInterval(timerInterval);
    submitScore();
}};

// ================ Check answer ==================
function checkAnswer(event) {

  console.log(event.target.dataset.answer);

  var choice = event.target.dataset.answer;

  if (choice === currentQuestion.answer) {

    console.log(`correct`);
    sendMessage("correct!", "#009705");

  } else {

    console.log(`incorrect`);
    secondsLeft = secondsLeft - 10;
    sendMessage("wrong!", "#B40000");

  };

  generateQuestion();
};

// ============= Function to send message then hide again ======================
function sendMessage(text, color) {

  footEl.innerHTML = text;
  footEl.setAttribute('style', `color:${color}; display:block;`);
  setTimeout(hideMessage, 2000);
}

function hideMessage() {
  footEl.setAttribute('style', 'display:none;')
}


// ============== submit score =======================
function submitScore() {
  score = secondsLeft;
  h1El.innerHTML = 'All done!';
  h2El.innerHTML = `Your final score is ${score}!`;
  olEl.setAttribute('style', 'display:none;')
  submitForm.setAttribute('style', 'display:flex;');

  submitBtn.addEventListener("click", function(event) {
    event.preventDefault();
    var initials = input.value.trim();
    initials = initials.toUpperCase();
    
    if (initials === "") {
      sendMessage('Please enter your initials', 'black')
      return;
    } else {
        newHighScore = {
          initials: initials,
          score: score
      };
    }
    console.log(newHighScore);

    addHighScore(newHighScore);
    showHighScores();
  });
}

function showHighScores() {

  h1El.innerHTML = 'High scores';
  h2El.setAttribute('style', 'display:none;');
  submitForm.setAttribute('style', 'display:none;');
  btnEl.setAttribute('style', 'display:none;');
  hiScoreDiv.setAttribute('style', 'display:flex;');


  highScores = getHighScores();
  sortHighScores(score);
  console.log(highScores);

  for (let index = 0; index < highScores.length; index++) {
    var li1 = document.createElement('li');
    li1.innerHTML = `${highScores[index].initials} - ${highScores[index].score}`;
    ol.appendChild(li1);
  }

return };

function addHighScore(newHighScore) {
  highScores = getHighScores();
  highScores.push(newHighScore);
  addData(highScores);
}

function addData() {
  localStorage.setItem('highScores', JSON.stringify(highScores));
}

function getHighScores() {
  var storedHighScores = localStorage.getItem('highScores');
  var emptyArr = [];
  if (JSON.parse(storedHighScores)) {
    return JSON.parse(storedHighScores);
  } else {
    return emptyArr;
  }

}

function sortHighScores() {
  highScores.sort((a,b)=>b.score-a.score);
  return highScores;
}



init();
