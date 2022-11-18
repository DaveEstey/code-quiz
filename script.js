
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
        options: [8, 7, 6, 9],
        correctAnswer: 9
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
var timeleft = 0;
var currQuestion = 0;
var currentQuestion = question[currQuestion];
var testLength = question.length;
var score = document.getElementById("right");
score.innerHTML = "test score";
var startbtn = document.getElementById("startbtn")

function startQuiz() {
    startbtn.addEventListener("click", function () {
        //countdown();
        showQuestion();
        startbtn.remove();
    });

}

function showQuestion() {

    console.log("current", currQuestion);

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
        optionsNode.setAttribute("id", ("btn" + i))
        optionsNode.innerHTML = currentQuestion.options[i];

        options.appendChild(optionsNode);

    }
    var btn0 = document.querySelector("#btn0");
    var btn1 = document.querySelector("#btn1");
    var btn2 = document.querySelector("#btn2");
    var btn3 = document.querySelector("#btn3");
    btn0.addEventListener("click", function () {   //changing the buttons to the next question

        if (btn0.innerHTML == question[currQuestion]['correctAnswer']) {
            console.log("right");
            right++;

        } else {
            console.log("wrong");
            wrong++;
        }

        if (currQuestion < (testLength - 1)) {
            console.log("cur", currQuestion);
        } else {
            console.log("end of Quiz");
            endQuiz();
        }
        currQuestion++;
        currentQuestion = question[currQuestion];
        title.textContent = currentQuestion.title;
        console.log("in click ev ", currentQuestion);
        for (var i = 0; i < currentQuestion.options.length; i++) {
            options.childNodes[i].innerHTML = currentQuestion["options"][i];
        }
        score.innerHTML = ("Right: " + right + " Wrong: " + wrong);
    });
    btn1.addEventListener("click", function () {   //changing the buttons to the next question

        if (btn1.innerHTML == question[currQuestion]['correctAnswer']) {
            console.log("right");
            right++;

        } else {
            console.log("wrong");
            wrong++;
        }

        if (currQuestion < (testLength - 1)) {
            console.log("cur", currQuestion);
        } else {
            console.log("end of Quiz");
            endQuiz();
        }
        currQuestion++;
        currentQuestion = question[currQuestion];
        title.textContent = currentQuestion.title;
        console.log("in click ev ", currentQuestion);
        for (var i = 0; i < currentQuestion.options.length; i++) {
            options.childNodes[i].innerHTML = currentQuestion["options"][i];
        }
        score.innerHTML = ("Right: " + right + " Wrong: " + wrong);
    });
    btn2.addEventListener("click", function () {   //changing the buttons to the next question

        if (btn2.innerHTML == question[currQuestion]['correctAnswer']) {
            console.log("right");
            right++;

        } else {
            console.log("wrong");
            wrong++;
        }

        if (currQuestion < (testLength - 1)) {
            console.log("cur", currQuestion);
        } else {
            console.log("end of Quiz");
            endQuiz();
        }
        currQuestion++;
        currentQuestion = question[currQuestion];
        title.textContent = currentQuestion.title;
        console.log("in click ev ", currentQuestion);
        for (var i = 0; i < currentQuestion.options.length; i++) {
            options.childNodes[i].innerHTML = currentQuestion["options"][i];
        }
        score.innerHTML = ("Right: " + right + " Wrong: " + wrong);
    });
    btn3.addEventListener("click", function () {   //changing the buttons to the next question

        if (btn3.innerHTML == question[currQuestion]['correctAnswer']) {
            console.log("right");
            right++;

        } else {
            console.log("wrong");
            wrong++;
        }

        if (currQuestion < (testLength - 1)) {
            console.log("cur", currQuestion);
        } else {
            console.log("end of Quiz");
            endQuiz();
        }
        currQuestion++;
        currentQuestion = question[currQuestion];
        title.textContent = currentQuestion.title;
        console.log("in click ev ", currentQuestion);
        for (var i = 0; i < currentQuestion.options.length; i++) {
            options.childNodes[i].innerHTML = currentQuestion["options"][i];
        }


        score.innerHTML = ("Right: " + right + " Wrong: " + wrong);

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
/* function updateQuestion() {
                    for (var i = 0; i < currentQuestion.options.length; i++) {
                        optionsNode[i].innerHTML = "";
                        optionsNode[i].textContent = currentQuestion.options[i];
                    }
                } */

function endQuiz(){
    options.innerHTML = "";
    score.innerHTML = "";
   
    var person = document.createElement("input");
    var submitbtn = document.createElement("button") 
    var scoreCard = document.createElement("p")
    var scoreCardEnd = ("Right: " + right + " Wrong: " + wrong + "Time left " + (timeleft));
    scoreCard.innerHTML = scoreCardEnd;
    submitbtn.innerHTML = "SUBMIT";
    var storePerson = {
        person,
        scoreCard
    }
    options.appendChild(person)
    options.appendChild(scoreCard)
    options.appendChild(submitbtn)
    
    
    submitbtn.addEventListener("submit", function() {
    localStorage.setItem(storePerson);
    var storedPerson = localStorage.getItem(storePerson);
    options.innerHTML = "";
    options.innerHTML = storedPerson;
});
}

/* function countdown() {
    var timer = document.getElementById("timer");
    var minute = 5;
    var sec = 5;
        timeleft = setInterval(function () {
        timer.innerHTML = minute + " : " + sec;
        sec--;
        if (minute < 0) {
            clearInterval(timeleft)
            timer.innerHTML = ("Out of time!")
            //endGame();
        }
        else if (sec < 0) {
            minute--;
            sec = 59;
        }
    }, 1000,);
} */
startQuiz();
