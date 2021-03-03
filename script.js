let question = [{
    quiz: 'What is your name?',
    aOption: 'Pritam Kumar',
    bOption: 'Shubham Kumar',
    cOption: 'Rahul Kumar',
    dOption: 'Raju Kumar',
}, {
    quiz: 'where are you from',
    aOption: 'Hazaribagh',
    bOption: 'Ranchi',
    cOption: 'Bokaro',
    dOption: 'Dhanbaad',
},{
    quiz: 'what is your hobby',
    aOption: 'Playing',
    bOption: 'Coding',
    cOption: 'reading',
    dOption: 'Swimming',
}, {
    quiz: 'favourite place',
    aOption: 'Home',
    bOption: 'office',
    cOption: 'Garden',
    dOption: 'School',
}];

//Selecting items

let ourQuestion = document.querySelector('.question-head');
let optionA = document.querySelector('#a-option');
let optionB = document.querySelector('#b-option');
let optionC = document.querySelector('#c-option');
let optionD = document.querySelector('#d-option');
let doneMes = document.querySelector('.done');

const submitBtn = document.querySelector('.btn-check');

let quizNum = 0;



function gotSelected(){
    const answerd = document.querySelectorAll('.anwser');
    answerd.forEach(function(eachClass){
    console.log(eachClass.checked);
    })
}
//window.addEventListener('DOMcontentLoaded', function(){}
firstQuiz();

function firstQuiz(){
    var showFirstQuiz = question[quizNum];
    ourQuestion.textContent = showFirstQuiz.quiz;
    optionA.textContent = showFirstQuiz.aOption;
    optionB.textContent = showFirstQuiz.bOption;
    optionC.textContent = showFirstQuiz.cOption;
    optionD.textContent = showFirstQuiz.dOption;
}

submitBtn.addEventListener('click', function(){
    gotSelected();
    quizNum++;
    if(quizNum < question.length){
        firstQuiz();
    } else{
        var message = 'You are done!!';
        doneMes.textContent = message;
    }
})


