var timerEl = document.getElementById("clock");
var scoreEl = document.getElementById("score");
var quizEl = document.getElementById("quiz");
var questionEl = document.getElementById("question");
var option1El = document.getElementById("option1");
var option2El = document.getElementById("option2");
var option3El = document.getElementById("option3");
var option4El = document.getElementById("option4");
var startEl = document.getElementById("start");
var timerObj;
var timerCounter = 2000;

var question_database = [
    {
        question:"what does HTML stand for? ",
        choiceA:"Hyper Text Makeup language ",
        choiceB:"Henry Talks More than Larry ",
        choiceC:"Hyper Text Markup Language ",
        choiceD:"Hummus Taste More Love ",
        answer:"Hyper Text Markup Language",
    },
    {
        question:"As of 2023, whats the most populated city in the world? ",
        choiceA:"Tookyoo 東京",
        choiceB:"New York City ニューヨーク",
        choiceC:"Itaewon  イテウォン",
        choiceD:"Rio de Janeiro",
        answer:"Tookyoo 東京",
    },
    {
        question:"Whats the fastest animal in world? ",
        choiceA:"The Red-snapping Turtle ",
        choiceB:"The Pronghorn ",
        choiceC:"The Cheetah ",
        choiceD:"The Peregrine Falcon ",
        answer:"The Peregrine Falcon ",
    },
    {
        question:"On record, how fast can a Cheetah run? ",
        choiceA:"220 MPH - 240 MPH",
        choiceB:"150 MPH - 180 MPH",
        choiceC:"50km/h - 75 km/h",
        choiceD:"110 km/h - 120km/h",
        answer:"110 km/h - 120km/h",
    },
    {
        question:"Whats the capital of Colombia",
        choiceA:"Bogoto",
        choiceB:"Cali",
        choiceC:"Medellin",
        choiceD:"Bogota",
        answer:"Bogota",
    }
]

quizEl.style.display = "none";
startEl.addEventListener("click",function(){
    startEl.style.display = "none";
    quizEl.style.display = "block";
    timerObj = setInterval(function(){
        timerEl.textContent = "Time Left: "+timerCounter
        if(timerCounter > 0){
            timerCounter--
        }else{
            endQuiz()
        }
    })
    displayQuestion()
})

function endQuiz(){
    clearInterval(timerObj)
}


function displayQuestion(){
    
};
