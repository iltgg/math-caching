const viewAnswer = document.querySelector("input.answer");
const answer = document.querySelector("p.answers");
const submit = document.querySelector("input.submit");
const answerBoxOne = document.querySelector("input.answer-input.one");
const answerBoxTwo = document.querySelector("input.answer-input.two");
const answerBoxThree = document.querySelector("input.answer-input.three");
const answerBoxOne2 = document.querySelector("input.answer-input.one.t");
const answerBoxTwo2 = document.querySelector("input.answer-input.two.t");
const answerBoxThree2 = document.querySelector("input.answer-input.three.t")
const answerBoxFour = document.querySelector("input.answer-input.four");
const answerBoxFour2 = document.querySelector("input.answer-input.four.t");
const answerBoxFour3 = document.querySelector("input.answer-input.four.th");
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

function submitAnswer() {
    const submissionOne = answerBoxOne.value;
    const submissionOne2 = answerBoxOne2.value;
    const submissionTwo = answerBoxTwo.value;
    const submissionTwo2 = answerBoxTwo2.value;
    const submissionThree = answerBoxThree.value;
    const submissionThree2 = answerBoxThree2.value;
    const submissionFour = answerBoxFour.value;
    const submissionFour2 = answerBoxFour2.value;
    const submissionFour3 = answerBoxFour3.value;
    let right = false;

    if (((submissionOne === "0" && submissionOne2 === "-6") || (submissionOne === "-6" && submissionOne2 === "0")) && 
    ((submissionTwo === "3" && submissionTwo2 === "-4") || (submissionTwo === "-4" && submissionTwo2 === "3")) 
     && ((submissionThree === "-1.1" && submissionThree2 === "2.1") || (submissionThree === "2.1" && submissionThree2 === "-1.1"))
    && (submissionFour === "750" && submissionFour2 === "11250" && submissionFour3 === "10")
    ) {
        right = true;
    } else {
        right = false;
    }

    if (right === true) {
        correct.style.display = "inline";
        incorrect.style.display = "none";
        confetti.start(5000);
    } else {
        incorrect.style.display = "inline";
        correct.style.display = "none";
        confetti.stop();
    }
}
