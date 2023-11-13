
var num1 = Number((Math.random()*1000).toFixed());
var num2 = Number((Math.random()*1000).toFixed());
document.getElementById("questionText").innerHTML = num1.toString() + " + " + num2.toString();
document.getElementById("addCheckbox").checked = true;

difficulty = getElementById("difficultySelection").value;
console.log(difficulty);

actualAnswer = num1+num2;

multiplier = 1;
if (difficulty == "easy") {
    multiplier = 1;
} else if (difficult == "medium") {
    multiplier = 5;
} else if (difficulty == "hard") {
    multiplier = 8;
} else if (difficulty == "impossible") {
    multiplier = 13;
}

addbox = document.getElementById("addCheckbox")
subtractbox = document.getElementById("subtractCheckbox")
multiplybox = document.getElementById("multiplicationCheckbox")
dividebox = document.getElementById("divisionCheckbox")

var operations = [];
operations.push("add");

function handleCheckboxEvent(event) {
    var checkbox = event.target;
    var value = checkbox.value;

    if (checkbox.checked) {
        operations.push(value)
    } else {
        operations.splice(operations.indexOf(value), 1)
    }

    console.log(operations)

}

let additionCheckbox = document.getElementById("addCheckbox");
let subtractionCheckbox = document.getElementById("subtractCheckbox");
let multiplicationCheckbox = document.getElementById("multiplicationCheckbox");
let divisionCheckbox = document.getElementById("divisionCheckbox");

additionCheckbox.addEventListener("change", handleCheckboxEvent);
subtractionCheckbox.addEventListener("change", handleCheckboxEvent);
multiplicationCheckbox.addEventListener("change", handleCheckboxEvent);
divisionCheckbox.addEventListener("change", handleCheckboxEvent);

function typed() {
    let answer = Number(document.getElementById("answerInput").value);
    console.log(answer)
    console.log(actualAnswer)

    console.log(typeof(answer));
    console.log(typeof(actualAnswer))

    function generateNumbers() {
        if (operation == "add") {
            num1 = Number((Math.random()*1000).toFixed());
            num2 = Number((Math.random()*1000).toFixed());
            document.getElementById("questionText").innerHTML = num1.toString() + " + " + num2.toString();
            actualAnswer = (num1 + num2).toFixed(2);
        }
        else if (operation == "subtract") {
            num1 = Number((Math.random()*1000).toFixed());
            num2 = Number((Math.random()*1000).toFixed());
            document.getElementById("questionText").innerHTML = num1.toString() + " - " + num2.toString();
            actualAnswer = (num1 - num2).toFixed(2);
        }
        else if (operation == "multiply") {
            num1 = Number((Math.random()*100).toFixed());
            num2 = Number((Math.random()*100).toFixed());
            document.getElementById("questionText").innerHTML = num1.toString() + " x " + num2.toString();
            actualAnswer = (num1 * num2).toFixed(2);
        }
        else if (operation == "divide") {
            num1 = Number((Math.random()*1000).toFixed());
            num2 = Number((Math.random()*10).toFixed());
            document.getElementById("questionText").innerHTML = num1.toString() + " / " + num2.toString();
            actualAnswer = (num1 / num2).toFixed(2);
        }

        num1 *= multiplier;
        num2 *= multiplier;
    }

    if (answer == actualAnswer) {

        operation = operations[Math.floor(Math.random()*operations.length)]
        generateNumbers()
        
        document.getElementById("answerInput").style.backgroundColor = "rgb(20, 150, 20)";
        document.getElementById("answerInput").value = "";

    } else if (answer != actualAnswer) {
        document.getElementById("answerInput").style.backgroundColor = "rgb(150, 20, 20)";
    }

    
}

document.getElementById("answerInput").addEventListener("change", typed)
