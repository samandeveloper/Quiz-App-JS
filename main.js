//all the questions in a array
let quizData = [
    {
        question: "Question1: How old is Florin?",
        a: "10",
        b: "17",
        c: "26",
        d: "110",
        correct: "c"
    },

    {
        question: "Question2: What is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "Javascript",
        correct: "d"
    },

    {
        question: "Question3: Who is the president of US?",
        a: "Florin Pop",
        b: "Joe Biden",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        correct: "b"
    },

    {
        question: "Question4: What does HTML stands for?",
        a: "Hypertext Makeup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a"
    },

    {
        question: "Question5: What year was Javascript launched?",
        a: "1996",
        b: "1995",
        c: "1948",
        d: "none of the above",
        correct: "d"
    }
];

//keep track of current question starts with 0
let currentQuiz = 0;
//for counting the score
let score = 0;
let quiz = document.getElementById("quiz");

//the question
let questionE1 = document.getElementById("question");

//.answer because it's a class of each input--radio buttons
let answerEls = document.querySelectorAll('.answer');
//the question text or lable
let a_text = document.getElementById("a_text");
let b_text = document.getElementById("b_text");
let c_text = document.getElementById("c_text");
let d_text = document.getElementById("d_text");
let submitBtn = document.getElementById("submit");

loadQuiz();

//a function to call every time we click on the submit button
function loadQuiz() {
    //call the deselect function first
    deselectAnswer();

    let currentQuizData = quizData[currentQuiz];
    //.id
    questionE1.innerHTML = currentQuizData.question;
    //.id
    //show the first four answers
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}

//if we have an answer--select and deselect--store the selected when we click submit
function getSelected() {
    let answer = undefined;
    //use forEach to call the function in an array for each element
    answerEls.forEach((answerEl) => {
        //if any of the four answers checked
        if (answerEl.checked) {
            //id can be: a b c d
            answer = answerEl.id;
        }
    });
    return answer;
}

//if we select an answer then submit button the answer from the previous question is still shown--with deselectAnswer() we prevent this
function deselectAnswer() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

//for going to the next question--click the submitBtn
submitBtn.addEventListener("click", () => {
    //check to see the answer
    let answer = getSelected();
    
    //if we have an answer for a question it should go to the next question
    if (answer) {
        //if we have a currect answer add to the score
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        //go to the next question--currentQuize is a question that we are already in
        currentQuiz++;

        //quizeData length is 3--go to the next question until the questions finished
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions</h2>`
        }
    }

});
