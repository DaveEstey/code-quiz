
var question = {
    qTitle: ["which number is the smallest", "Which number is the largest", "which number is the coolest", "So why does it skip one?", "answer is A"],
    options: [[1, 2, 3, 4], [2, 3, 4, 5], [4, 6, 7, 8], [7, 9, 9, 10], ["a","b", "c", "d"]],
    correctanswer: [1, 5, 7, 10, "d"],
    
};
var currQuestion = 0;
var right = 0;
var wrong = 0;
var scoreCard = [right, wrong];
var testLength = question.qTitle.length;
function showQuestion() {
    
    console.log("current",currQuestion);
    
    var title = document.getElementById("title");
    title.textContent = question.qTitle[currQuestion];

    var options = document.querySelectorAll(".options");
    console.log("options",options);
    options.forEach(function (element, index) { 
        console.log("index", index);
        console.log("question", question);
        console.log("currQuestion", currQuestion);
        element.textContent = question.options[currQuestion][index];
        element.addEventListener("click", function () {
            console.log(element.textContent);
            console.log(question.correctanswer[currQuestion])
            if (element.textContent == question.correctanswer[currQuestion]) {
                console.log("right")
                right++;
               
            } else {
                console.log("wrong");
                wrong++;
            }
            if (currQuestion < 4){
                
                currQuestion++;
                console.log("cur", currQuestion);
                showQuestion(currQuestion);
                
            }else {
                console.log("end of test")
            }
            
           
        });
    });
}

showQuestion();



var timer = setInterval(function(){

} , 1000);
