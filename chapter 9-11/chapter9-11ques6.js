/*Marksheet*/
var eng =  +prompt("Enter English Marks");
var maths = +prompt("Enter Maths Marks");
var urdu = +prompt("Enter urdu Marks");
var obtainedMarks = eng + maths + urdu;
var totalMarks = 300;
var per = obtainedMarks * 100 / totalMarks;
var grade;
if(per>=80){
    grade="A-one";
    document.write("<b>Excellent</b>"+"<br>");
}
if(per>=70){
    grade="A";
    document.write("<b>Good</b>"+"<br>"); 
}
if(per>=60){
    grade="B";
    document.write("<b>You  need to improve</b>"+"<br>");
}
if(per<60){
    document.write("<b>Fail</b>"+"<br>");
}
document.write("<b>Total Marks:</b>" + totalMarks + "<br>");
document.write("<b></b>Obtained Marks:</b>" + obtainedMarks + "<br>");
document.write("<b>Grade:</b>" + grade+"<br>");
document.write("<b>Percentage:</b>" + per + "%"+"<br>");
