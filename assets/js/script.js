const question = document.getElementById('#quiz-quesiton');
const choices = document.Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.getElementById('#progressText');
const score = document.getElementById('#score');
const progressBarFull = document.getElementByClassName('.progressBarFull');

let question = {};
let acceptedAnswers = true;
let score = 0;
let questionCounting = 0;
let remainingQuestions = [];

let questions = [
    {
        question: 'What is the seat of house Tully?',
        choice1: 'Winterfell',
        choice2: 'Casterly Rock',
        choice3: 'Riverrun',
        choice4: 'The Eyrie'
    }
]