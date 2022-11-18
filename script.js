
var question = [
    {
        title: "which number is the smallest",
        options: [1, 2, 3, 4],
        correctAnswer: 1
    },
    {
        title: "Which number is the largest",
        options: [2, 3, 4, 5],
        correctAnswer: 5
    },
    {
        title: "5",
        options: [2, 3, 4, 5],
        correctAnswer: 5
    },
    {
        title: "3",
        options: [2, 3, 4, 5],
        correctAnswer: 3
    },
    {
        title: "2",
        options: [2, 3, 4, 5],
        correctAnswer: 2
    }
];
var wrong = 0;
var right = 0;
var currQuestion = 0;
var currentQuestion = question[currQuestion];
var testLength = question.length;
var score = document.getElementById("right");
score.innerHTML = "test score";
var startbtn = document.getElementById("startbtn")

function startGame() {
    startbtn.addEventListener("click", function () {
        showQuestion();
        countdown();
        startbtn.remove();
    });

}

function showQuestion() {

    console.log("current", currQuestion);

    var currentQuestion = question[currQuestion];
    var title = document.querySelector("#title");
    var options = document.querySelector("#options");
    if (currQuestion < (testLength - 1)) {
        title.textContent = currentQuestion.title;
    } else {
        options.innerHTML = "";
        title.textContent = ("Submit your Intials");
    }
    for (var i = 0; i < currentQuestion.options.length; i++) { //creating the buttons
        var optionsNode = document.createElement('button');
        optionsNode.setAttribute("class", ("btn"+[i]))
        optionsNode.textContent = currentQuestion.options[i];

        options.appendChild(optionsNode);

    }
        var btn1 = document.querySelectorAll(".btn1");
        btn1.addEventListener("click", function (element) {   //changing the buttons to the next question
        if (element.innerHTML === currentQuestion.correctAnswer) {
            console.log("right");
            right++;

        } else {
            console.log("wrong");
            wrong++;
        }

        if (currQuestion < (testLength - 1)) {
            console.log("cur", currQuestion);
        } else {
            console.log("end of test");
        } 
        currQuestion++;
        console.log("in click ev");
        for (var i = 0; i < currentQuestion.options.length; i++) {
            optionsNode[i].textContent = currentQuestion.options[i];
        }


        score.innerHTML = ("Right: " + right + " Wrong: " + wrong);
        allOptions.innerHTML = "";
    });

}

/* function hideQuestion(){

} */


/* function selectChoice(changeObj) {



    changeObj.addEventListener("click", function (element) {   //changing the buttons to the next question
        currQuestion++;
        console.log("in click ev");
        for (var i = 0; i < currentQuestion.options.length; i++) {
            optionsNode[i].textContent = currentQuestion.options[i];
        }
   
    if (element.innerHTML === (currentQuestion.correctAnswer)) {
        console.log("right");
        right++;

    } else {
        console.log("wrong");
        wrong++;
    }

    if (currQuestion < (testLength - 1)) {
        console.log("cur", currQuestion);
    } else {
        console.log("end of test");
    }
    score.innerHTML = ("Right: " + right + " Wrong: " + wrong);
    optionsNode.innerHTML = "";
 });

} */
function updateQuestion() {
    for (var i = 0; i < currentQuestion.options.length; i++) {
        optionsNode[i].innerHTML = "";
        optionsNode[i].textContent = currentQuestion.options[i];
    }
}

function countdown() {
    var timer = document.getElementById("timer");
    var minute = 5;
    var sec = 5;
    var timeleft = setInterval(function () {
        timer.innerHTML = minute + " : " + sec;
        sec--;
        if (minute < 0) {
            clearInterval(timeleft);
            timer.innerHTML = ("Out of time!")
            //endGame();
        }
        else if (sec < 0) {
            minute--;
            sec = 59;
        }
    }, 1000,);
}
startGame();
