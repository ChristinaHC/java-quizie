const quizQuestions = [
    {
        question: "",
        answers: {
            a: "",
            b: "",
            c: "",
            d: ""
        },
        correctAnswer: ""
    },
    {
        question: "",
        answers: {
            a: "",
            b: "",
            c: "",
            d: ""
        },
        correctAnwswer: ""
    },
    {
        question: "",
        answers: {
            a: "",
            b: "",
            c: "",
            d: ""
        },
        correctAnswer: ""
    }
];

let index = 0;
let time = 200;
let timerId;
let startButtonEl = document.getELementById ("startbutton");
let timeEl = document.getELementById ("time");
let startDivEl = document.getElementById ("startdiv");
let questionsDivEl = document.getElementById ("questionsdiv");
let currentQuestionEl = document.getElementById ("currentquestion");

function handleTick() {
    time--;
}

function startQuiz(){
    startDivEl.setAttribute("class", "hidden");

    questionsDivEl.removeAttribute("class")

    timerId = setInterval(handleTick, 1000);
    timeEl.innerText = time
}

startButtonEl.onclick = startTheQuiz;

var currentQuestion = 0;
function displayQuestion(questionIndex) {
    var question = myQuestions[questionIndex]
    console.log (question.question)
    currentQuestionEl.innerText = question.question;
    
}
displayQuestion(currentQuestion)