const iniciartBtn = document.querySelector('.iniciar-btn');
const popupInfo = document.querySelector('.popup-info');
const sairBtn = document.querySelector('.sair-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');


iniciartBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
}

sairBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    
} 

continueBtn.onclick = () => {
    quizSection.classList.add('active')
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');


    showQuestion(0);
}


let questionCout = 0

const nextBtn = document.querySelector('.next-btn');

nextBtn.onclick = () =>
    if (questionCout < questions.length - 1) {
        questionCout++;
        showQuestion(questionCout);
    }

    else {
        console.log('Question Completed');
    }

nextBtn.onclick = () => {
    questionCout++;
    showQuestion(questionCout);
}

const optionList = document.querySelector ('.lista-de-alternativa');

function showQuestion(QUIZ) {
    const questionText = document.querySelector('.question-text')
    questionText.textContent =`${questions[QUIZ].numb}. ${questions[QUIZ].question}`;


let optionTag = `<div class="alternativa"><span>${questions[QUIZ].option[0]}</span></div>
    <div class="alternativa"><span>${questions[QUIZ].option[1]}</span></div>
    <div class="alternativa"><span>${questions[QUIZ].option[2]}</span></div>
    <div class="alternativa"><span>${questions[QUIZ].option[3]}</span></div>`; 

    optionList.innerHTML = optionTag
}
