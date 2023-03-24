var timerEl = document.getElementById("clock");
var scoreEl = document.getElementById("score");
var quizEl = document.getElementById("quiz");
var questionEl = document.getElementById("question");
var option1El = document.getElementById("option1");
var option2El = document.getElementById("option2");
var option3El = document.getElementById("option3");
var option4El = document.getElementById("option4");
var evaluateEl = document.getElementById("evaluate")
var startEl = document.getElementById("start");
var timerObj;
var timerCounter = 60;
var currentQuestion = 0;
var score = 0;
var summaryEl = document.getElementById("summary");
summaryEl.style.display = "none";
option1El.addEventListener("click",checkAnswer);
option2El.addEventListener("click",checkAnswer);
option3El.addEventListener("click",checkAnswer);
option4El.addEventListener("click",checkAnswer);

var question_database = [
    {
        question:"What does HTML stand for? ",
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
    }, 1000)
    displayQuestion()
})

function endQuiz(){
    clearInterval(timerObj)
    quizEl.style.display = "none";
    summaryEl.style.display = "block";
    document.getElementById("score-result").textContent = timerCounter * score;
    document.getElementById("save-userscore").addEventListener("click", saveDetails)
}


function displayQuestion(){
    questionEl.textContent = question_database[currentQuestion].question;
    option1El.textContent = question_database[currentQuestion].choiceA
    option2El.textContent = question_database[currentQuestion].choiceB
    option3El.textContent = question_database[currentQuestion].choiceC
    option4El.textContent = question_database[currentQuestion].choiceD

};

function checkAnswer(event){
    var userAnswer = event.target.textContent;
    console.log("choice sel",userAnswer)
    if(userAnswer == question_database[currentQuestion].answer){
        score += 5;
    evaluateEl.textContent = "You got it right!"
    }else {
        timerCounter -= 5;
        evaluateEl.textContent = "You got it wrong :( "
    }
    scoreEl.textContent = "Score : "+score;
    if (currentQuestion < question_database.length - 1){
        currentQuestion++;
        displayQuestion();
    }else {
        endQuiz();
    }
};


function saveDetails(event){
    event.preventDefault()
    var user = document.getElementById("user-name").value
    var previousScore = JSON.parse(localStorage.getItem("codequiz")) || []
    previousScore.push({
        user:user,
        finalScore: timerCounter * score
    })
    localStorage.setItem("codequiz",JSON.stringify(previousScore))
    summaryEl.style.display = "none";
    var htmlString = ""
    for(let i=0;i<previousScore.length;i++){
        htmlString += `<h5>User:${previousScore[i].user} ----- ${previousScore[i].finalScore}`
    }
    htmlString += `<br /><br /><a class="btn btn-danger" href="/">Retake Quiz</a>`
    document.getElementById("displayStorage").innerHTML = htmlString;
}