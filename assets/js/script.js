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
        choice4: 'The Eyrie',
        answer: 3,
    }, 
    {
        question: 'What is the valyrian steel sword given to Brienne called?',
        choice1: 'Ice',
        choice2: 'Oathkeeper',
        choice3: 'Longclaw',
        choice4: 'Heartsbane',
        answer: 2,
    }
    {
        question: 'What are the words of house Baratheon?',
        choice1: 'Ours Is The Fury',
        choice2: 'Hear Me Roar',
        choice3: 'Unbound, Unbent, Unbroken',
        choice4: 'Our Blades Are Sharp',
        answer: 1,
    }, 
    {
        question: 'What kingdom do the Tyrells rule over?',
        choice1: 'The North',
        choice2: 'The Reach',
        choice3: 'The Stormlands',
        choice4: 'The Iron Islands',
        answer: 2,
    }, 
]

const SCORE = 100;
const MAX_QUESTIONS = 4;

runGame = () => {
    questionCount = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestions { }
}

getNewQuestions = () => {
    if(availableQuestions.length === 0 || questionCount > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);

        return window.location.assign('/end.html');
}
        questionCount++;
        progressText.innerText = `Question ${questionCount} of ${MAX_QUESTIONS}`;
        progressBarFull.style.width = `${(questionCount/MAX_QUESTIONS) * 100}%`;

        const questionsIndex = Math.floor(Math.randon() * availableQuestions.length);
        currentQuestions = availableQuestions[questionsIndex];
        questions.innerText = currentQuestions.question;

        choices.forEach(choice => {
            const numner = choice.dataset ['number']
            choice.innerText = currentQuestions ['choice + number']
        })

        availableQuestions.splice(questionsIndex, 1);

        acceptedAnswers = true;
    
}

