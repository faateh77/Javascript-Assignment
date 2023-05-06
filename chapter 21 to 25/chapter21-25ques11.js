var userInput = prompt("Enter the string");
var capatilizedUserInput = userInput.slice(0,1).toUpperCase();
var remainingString = userInput.slice(1);
var titleCase =  capatilizedUserInput + remainingString; 
document.write("<b>User Input:</b>" + " " + userInput + "<br>");
document.write("<b>Title case:</b>" + " " + titleCase+ "<br>");