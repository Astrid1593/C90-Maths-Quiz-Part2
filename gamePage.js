//variables
var player1Name = localStorage.getItem("Player 1");
var player2Name = localStorage.getItem("Player 2");
var player1Score = 0;
var player2Score = 0;
var asking = player1Name;
var answering = player2Name;
var number1 = 0;
var number2 = 0;
var actualAnswer = number1 * number2;
//log things in console
console.log("Player 1: " + player1Name);
console.log("Player 2: " + player2Name);
console.log("Player 1 score: " + player1Score);
console.log("Player 2 score: " + player2Score);
console.log("Asking: " + asking);
console.log("Answering: " + answering);
console.log("Answer to current equation: " + actualAnswer);
//function to update the text
function setText(){
    document.getElementById("player1Score").innerHTML = player1Name + ": " + player1Score;
    document.getElementById("player2Score").innerHTML = player2Name + ": " + player2Score;
    document.getElementById("questionTurn").innerHTML = "Asking question: " + asking;
    document.getElementById("answerTurn").innerHTML = "Answering question: " + answering;
}
//sets who's asking and answering the question
//checks whether the player's answer is correct
function check(){

}
//sends the equation to be put on the screen
function send(){
    number1 = document.getElementById("number1Input").value;
    number2 = document.getElementById("number2Input").value;
    console.log("Number 1: " + number1);
    console.log("Number 2: " + number2);
    document.getElementById("displayQuestion").innerHTML = "Q. " + number1 + " x " + number2;
    console.log("Current equation: " + document.getElementById("displayEquation"));
}