/*Guess Game*/
var guessedNumber = prompt("Enter Your Secret Number"+"<br>");
var secretNumber = 3;
if(secretNumber==guessedNumber){
    document.write("Bingo! Correct Answer"+"<br>");
}
if(secretNumber== +1){
    document.write("Close enough to the correct answer"+"<br>");
}