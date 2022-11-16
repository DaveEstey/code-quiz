
var question = {
    qTitle: ["which number is the smallest", "Which number is the largest", "which number is the largest"],
    options: [[1, 2, 3, 4], [2, 3, 4, 5], [4, 6, 7, 8]],
    correctanswer: [0, 3, 3],

};
var currQuestion = 0
var right = 0;
var wrong = 0;
var scoreCard = [right, wrong];

function showQuestion() {

    var title = document.getElementById("title");
    title.textContent = question.qTitle[currQuestion];

    var options = document.querySelectorAll(".options");  
    
    options.forEach(function (element, index) {
        element.textContent = question.options[index];
        element.addEventListener("click", ".options", function (){
            
            
    });
    });
    
}
/* 
function startQuiz(){
    var timer= setInterval()
} */


function chooseAnswer(event){
    event.preventdefault();
    (this).addEventListener("click", ".choice", this);
    currQuestion++;
}


showQuestion();