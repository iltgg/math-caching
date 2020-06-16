const viewAnswer = document.querySelector("input.answer");
const answer = document.querySelector("p.answers");
const submit = document.querySelector("input.submit");
const answerBoxOne = document.querySelector("input.answer-input.one");
const answerBoxTwo = document.querySelector("input.answer-input.two")
const correct = document.querySelector("span.correct");
const incorrect = document.querySelector("span.incorrect");
let shown = false;

viewAnswer.addEventListener("click", showAnswer)
submit.addEventListener("click", submitAnswer);

function showAnswer() {
    if (shown === false) {
        answer.style.display = "block";
        shown = true;
    } else {
        answer.style.display = "none";
        shown = false;
    }
}

function submitAnswer(){
    const submissionOne = answerBoxOne.value;
    const submissionTwo = answerBoxTwo.value;
    if(submissionOne === "5" && submissionTwo === "(-9, -3)"){
        correct.style.display = "inline";
        incorrect.style.display = "none";
        confetti.start(5000);
    } else {
        incorrect.style.display = "inline";
        correct.style.display = "none";
        confetti.stop();
    }
}
