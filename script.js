
var question = {
    qTitle: ["which number is the smallest", "Which number is the largest", "which number is the coolest"],
    options: [[1, 2, 3, 4], [2, 3, 4, 5], [4, 6, 7, 8]],
    correctanswer: [1, 5, 7],
    
};
var currQuestion = 0;
var right = 0;
var wrong = 0;
var scoreCard = [right, wrong];
var testLength = question.qTitle.length;
function showQuestion() {
    
 
    var title = document.getElementById("title");
    title.textContent = question.qTitle[currQuestion];

    var options = document.querySelectorAll(".options");
    console.log(options);
    options.forEach(function (element, index) { 
        console.log("index", index);
        console.log("question", question);
        console.log("currQuestion", currQuestion);
        element.textContent = question.options[currQuestion][index];
        element.addEventListener("click", function () {
            console.log(element.textContent);
            console.log(question.correctanswer[currQuestion])
            if (element.textContent == question.correctanswer[currQuestion]) {
                alert("ding");
                right++;
               
            } else {
                alert("bong");
                wrong++;
             
            }
            if (currQuestion < 2){
                currQuestion++;
                console.log(currQuestion);
                showQuestion();
            }else alert("done!")
            
           
        });
    });
}


if (currQuestion == 0){
    showQuestion();
}


var timer = setInterval(function(){

} , 1000);
