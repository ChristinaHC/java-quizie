const quizQuestions = [
    {
        question: "Who developed JavaScript?",
        answers: {
            a: "Alan Turing",
            b: "Ada Lovelave",
            c: "Linus Torvalds",
            d: "Brendan Eich"
        },
        correctAnswer: "d"
    },
    {
        question: "What does DOM stand for?",
        answers: {
            a: "Data Origin Model",
            b: "Database Origin Mode",
            c: "Document Object Model",
            d: "Descriptive Object Model"
        },
        correctAnwswer: "c"
    },
    {
        question: "What is a variable in JavaScript",
        answers: {
            a: "A default value.",
            b: "A named value that needs to be defined.",
            c: "An argument passed through a function.",
            d: "A data type."
        },
        correctAnswer: "b"
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
    },
    
];

let index = 0;
let time = 200;
let timerId;
let startButtonEl = document.getElementById ("startbutton");
let timeEl = document.getElementById ("time");
let startDivEl = document.getElementById ("startquizdiv");
let questionsDivEl = document.getElementById ("questionsdiv");
let currentQuestionEl = document.getElementById ("currentquestion");
let currentAnswersEl = document.getElementById ("currentanswers");

startButtonEl.onclick = startTheQuiz;
startButtonEl.addEventListener("click");

function handleTick() {
    time--;
}

function startQuiz(){
    startDivEl.setAttribute("class", "hidden");

    questionsDivEl.removeAttribute("class")

    timerId = setInterval(handleTick, 1000);
    timeEl.innerText = time
}


var currentQuestion = 0;
function displayQuestion(questionIndex) {
    var question = myQuestions[questionIndex]
    console.log (question.question)
    currentQuestionEl.innerText = question.question;

    var answers = myQuestions[answersIndex]
    console.log(question.answers)
    currentQuestionEl.innerText = question.answer;
    
}
displayQuestion(currentQuestion)