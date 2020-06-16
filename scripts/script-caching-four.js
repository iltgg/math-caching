const viewAnswer = document.querySelector("input.answer");
const answer = document.querySelector("p.answers");
const submit = document.querySelector("input.submit");

const fa = document.querySelector("select.function.a");
const fb = document.querySelector("select.function.b");
const fd = document.querySelector("select.function.d");

const fad = document.querySelector("input.answer-input.ad");
const far = document.querySelector("input.answer-input.ar");
const fbd = document.querySelector("input.answer-input.bd");
const fbr = document.querySelector("input.answer-input.br");
const fdd = document.querySelector("input.answer-input.dd");
const fdr = document.querySelector("input.answer-input.dr");

const f0 = document.querySelector("input.answer-inputs.a");
const f1 = document.querySelector("input.answer-inputs.b");
const f2 = document.querySelector("input.answer-inputs.c");
const f3 = document.querySelector("input.answer-inputs.d");

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
    let right = false;
    if (fa.value === "not-function" && fb.value === "function" && fd.value === "function" && fad.value === "{x∈ℝ|-2.5≤x≤2.5}" && far.value === "{y∈ℝ|-5≤y≤5}" && fbd.value === "{x∈ℝ}" && fbr.value === "{y∈ℝ|-6≤y}" && fdd.value === "{x∈ℝ|x≠-5}"
        && fdr.value === "{y∈ℝ|y≠2}" && f0.value === "-2" && f1.value === "-6" && f2.value === "-18" && f3.value === "-38") {
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
