
    
var num1 = Number((Math.random()*1000).toFixed());
var num2 = Number((Math.random()*1000).toFixed());
document.getElementById("questionText").innerHTML = num1.toString() + " + " + num2.toString();

function buttonPressed() {
    var answer = Number(document.getElementById("answerInput").value);

    if (answer == num1+num2) {
        
        num1 = Number((Math.random()*1000).toFixed());
        num2 = Number((Math.random()*1000).toFixed());
        document.getElementById("questionText").innerHTML = num1.toString() + " + " + num2.toString();

        document.getElementById("answerInput").style.backgroundColor = "rgb(20, 150, 20)";

    }
    
}
