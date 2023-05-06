/*Calculator*/
var num1 = +prompt("enter the first number");
var num2 = +prompt("Enter the second number");

// var addition,subtraction,multiplication,division;
var operation = prompt("Enter the operation you want to perform");
if(operation=='addition' || operation=='Addition'){
  var  addition = num1 + num2;
    document.write("The result of  addition  of is" + " "+ addition);
}
if(operation=='subtraction' || operation=='Subtraction'){
    subtraction = num1 - num2;
    document.write("The result of  subtraction  of is" +  " " + subtraction);
}
if(operation=='multiplication' || operation=='Multiplication'){
    multiplication = num1 * num2;
    document.write("The result of  multiplication  of is" +  " " +  multiplication);
}
if(operation=='division' || operation=='Division'){
    division = num1 / num2;
    document.write("The result of  division  of is" + " " +  division);
}