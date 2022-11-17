
var question = {
    qTitle: ["which number is the smallest", "Which number is the largest", "which number is the coolest", "So why does it skip one?", "answer is A"],
    options: [[1, 2, 3, 4], [2, 3, 4, 5], [4, 6, 7, 8], [7, 9, 9, 10], ["a", "b", "c", "d"]],
    correctanswer: [1, 5, 7, 10, "d"],

};  
var wrong = 0;
var right = 0;
var currQuestion = 0;
var testLength = question.qTitle.length;
var score = document.getElementById("right");
score.innerHTML = "test score";
var startbtn = document.getElementById("startbtn")

function startGame() {
    startbtn.addEventListener("click", function () {
        startbtn.remove();
        showQuestion();
        countdown();
    });

}

function showQuestion() {

    console.log("current", currQuestion);
    
    var title = document.getElementById("title");
    title.textContent = question.qTitle[currQuestion];

    var options = document.querySelectorAll(".options");
    for (var i = 0; i < options.length; i++) {
        options[i].innerHTML = question.options[currQuestion][i];
        console.log("options I",options[i].innerHTML);
        selectChoice(options[i]);
    }
}

function selectChoice(element) {

  
    var score = document.getElementById("right");
    
    element.addEventListener("click", function (event) {
        event.stopPropagation();
        event.preventDefault();
        if (element.innerHTML == (question.correctanswer[currQuestion])) {
            console.log("right");
            right++;

        } else {
            console.log("wrong");
            wrong++;
        }
        if (currQuestion < 4) {

            currQuestion++;
            console.log("cur", currQuestion);
            showQuestion();


        } else {
            console.log("end of test");
        }
        score.innerHTML = ("Right: " + right + " Wrong: " + wrong);
    });

}

function countdown() {
    var timer = document.getElementById("timer");
    var minute = 5;
    var sec = 5;
    setInterval(function () {
        timer.innerHTML = minute + " : " + sec;
        sec--;
        if (minute < 0) {
            clearInterval(timer);
            timer.innerHTML = ("Out of time!")
            endGame();
        }
        else if (sec < 0) {
            minute--;
            sec = 59;
        }
    }, 1000,);
}
startGame();

