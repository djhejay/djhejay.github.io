var questionBank= [
    {
        question : 'What is Professor Dumbledore first name?',
        option : ['Albus','Arnold','Arthur','Albert'],
        answer : 'Albus'
    },
    {
        question : 'How many books does harry potter series have?',
        option : ['5','6','7','8'],
        answer : '7'
    },
    {
        question : 'What house is Luna Lovegood in?',
        option : ['Gryffindor','Slytherin','Hufflepuff','Ravenclaw'],
        answer : 'Ravenclaw'
    },
    {
        question : 'What is Ron most scared of?',
        option : ['Snakes','Hedgehogs','Spiders','The dark'],
        answer : 'Spiders'
    },
    {
        question : 'What is the last name of Ginny?',
        option : ['Potter','Weasley','Granger','Malfoy'],
        answer : 'Weasley'
    },
]

var question= document.getElementById ('question');
var quizContainer= document.getElementById ('quiz-container');
var scorecard= document.getElementById ('scorecard');
var option0= document.getElementById ('option0');
var option1= document.getElementById ('option1');
var option2= document.getElementById ('option2');
var option3= document.getElementById ('option3');
var next= document.querySelectorAll ('.question-next');
var points= document.getElementById ('score');
var span= document.querySelectorAll ('span');
var i=0;
var score=0;

function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML='Q.'+ (i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML="Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display='none';
        scoreboard.style.display='block';
    }
}

next[0].addEventListener('click', nextQuestion, false);

function backToQuiz(){
    location.reload();
}

function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display='block';
    scoreboard.style.display='none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}

displayQuestion();
