// ============= Defining elements as variables ===========================
var h1El = document.getElementById('h1');
var h2El = document.getElementById('h2');
var btnEl = document.getElementById('start');


h1El.innerHTML = `Coding Quiz Challenge`;
h2El.innerHTML = `Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!`;


h1El.setAttribute('style', '');
h2El.setAttribute('style', 'text-align:center; font-size:200%;');
btnEl.setAttribute('style', 'width: 150px; font-size:125%; color:white; background:#351C75; border: 0; padding: 10px 0; border-radius:5px; margin-top:30px;');









btnEl.addEventListener('click', startQuiz())