
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
        title: "Pick number 9",
        options: [8, 7, 6, 9],
        correctAnswer: 9
    },
    {
        title: "Comes before all except 1",
        options: [2, 3, 4, 5],
        correctAnswer: 3
    },
    {
        title: "Is the loneliest number",
        options: [1, 3, 4, 5],
        correctAnswer: 1
    }
];
var wrong = 0;
var right = 0;
var minute = 1;
var sec = 30;
var timer = document.getElementById("timer");
var timeLeft = 0;
var currQuestion = 0;
var currentQuestion = question[currQuestion];
var testLength = question.length;
var score = document.getElementById("right");
score.innerHTML = "test score";
var startbtn = document.getElementById("startbtn")

function startQuiz() {
    startbtn.addEventListener("click", function () {
        countdown();
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
    var btn0 = document.querySelector("#btn0"); // Can use forEach function, but onl figured out that after I couldnt get it to work and did it this way
    var btn1 = document.querySelector("#btn1");
    var btn2 = document.querySelector("#btn2");
    var btn3 = document.querySelector("#btn3");
    btn0.addEventListener("click", function () {   // Changing the buttons to the next question

        if (btn0.innerHTML == question[currQuestion]['correctAnswer']) {
            console.log("right");
            right++;

        } else {
            console.log("wrong");
            wrong++;
        }

        if (currQuestion < (testLength - 1)) {
            console.log("cur", currQuestion);
            currQuestion++;
            currentQuestion = question[currQuestion];
            title.textContent = currentQuestion.title;
            score.innerHTML = ("Right: " + right + " Wrong: " + wrong);
            console.log("in click ev ", currentQuestion);
        for (var i = 0; i < currentQuestion.options.length; i++) {
            options.childNodes[i].innerHTML = currentQuestion["options"][i];
        }
        } else {
            console.log("end of Quiz");
            title.textContent = "Enter your Initials";
            endQuiz();
        }

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
            currQuestion++;
            currentQuestion = question[currQuestion];
            title.textContent = currentQuestion.title;
            score.innerHTML = ("Right: " + right + " Wrong: " + wrong);
            console.log("in click ev ", currentQuestion);
        for (var i = 0; i < currentQuestion.options.length; i++) {
            options.childNodes[i].innerHTML = currentQuestion["options"][i];
        }
        } else {
            console.log("end of Quiz");
            title.textContent = "Enter your Initials";
            endQuiz();
        }
      

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
            currQuestion++;
            currentQuestion = question[currQuestion];
            title.textContent = currentQuestion.title;
            score.innerHTML = ("Right: " + right + " Wrong: " + wrong);
            console.log("in click ev ", currentQuestion);
        for (var i = 0; i < currentQuestion.options.length; i++) {
            options.childNodes[i].innerHTML = currentQuestion["options"][i];
        }
        }else {
            console.log("end of Quiz");
            title.textContent = "Enter your Initials";
            endQuiz();
        }
   
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
            currQuestion++;
            currentQuestion = question[currQuestion];
            title.textContent = currentQuestion.title;
            console.log("in click ev ", currentQuestion);
            score.innerHTML = ("Right: " + right + " Wrong: " + wrong);
        for (var i = 0; i < currentQuestion.options.length; i++) {
            options.childNodes[i].innerHTML = currentQuestion["options"][i];
        }
        } else {
            console.log("end of Quiz");
            title.textContent = "Enter your Initials";
            endQuiz();
        }
       
      




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

function endQuiz() {
    options.innerHTML = "";
    score.innerHTML = "";
    timer.innerHTML = "";
    timeLeft = (sec + (minute*60))
    var person = document.createElement("input");
    var submitbtn = document.createElement("button")
    var scoreCard = document.createElement("p")
    var scoreCardEnd = ("Right: " + right + " Wrong: " + wrong + " and had a time left of: " + timeLeft + "seconds");
    scoreCard.innerHTML = scoreCardEnd;
    submitbtn.innerHTML = "SUBMIT";

    options.appendChild(person)
    options.appendChild(scoreCard)
    options.appendChild(submitbtn)


    var submitbtn1 = document.querySelector("button");
    submitbtn1.addEventListener("click", function (event) {
        event.preventDefault();
        var stPerson = document.querySelector("input").value;
        var storePerson = {
            person: stPerson,
            scoreCard: scoreCardEnd
        }
        storePerson = JSON.stringify(storePerson);
        localStorage.setItem("person", storePerson);
        var storedPerson = localStorage.getItem("person");
        storedPerson = JSON.parse(storedPerson);
        options.innerHTML = "";
        options.innerHTML = ((storedPerson.person)+ " scored " + (storedPerson.scoreCard));

    });


}


function countdown() {
    
    var cTimeLeft = setInterval(function () {
    if (currQuestion < (testLength - 1)){
    timer.innerHTML = minute + " : " + sec;
    }else{
        clearInterval(cTimeLeft); 
    }
        sec--;
        if (minute < 0 ) {
            clearInterval(cTimeLeft)
            timer.innerHTML = ("Out of time!")
            endQuiz();
        }
        else if (sec < 0) {
            minute--;
            sec = 59;

        }
    }, 1000);
}
startQuiz();
