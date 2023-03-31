var questionBank= [
    {
        question : 'Who is Nymphadora Tonks aunt?',
        option : ['Nevilles grandmother','Sybil Trelawney','Bellatrix Lestrange','She doesnt have an aunt'],
        answer : 'Bellatrix Lestrange'
    },
    {
        question : 'Which subject does Harry get a "Dreadful" for in his O.W.L.S?',
        option : ['Potions','Defence against the Dark Arts','History of Magic','Herbology'],
        answer : 'History of Magic'
    },
    {
        question : 'How many staircases are there in Hogwarts?',
        option : ['364','193','142','96'],
        answer : '142'
    },
    {
        question : 'Who teased Moaning Myrtle about her glasses that lead to Myrtle crying in the washroom before getting killed?',
        option : ['Marrieta Edgecomb','Olive Hornby','Marcus Long','Jonathan Prewet'],
        answer : 'Olive Hornby'
    },
    {
        question : 'On the tapestry across from the Room of Requirement, what is the man teaching the trolls to do?',
        option : ['Sever peoples heads','Eat with good table manners','Magic','Ballet'],
        answer : 'Ballet'
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