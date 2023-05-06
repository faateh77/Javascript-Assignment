var userDate = +prompt("Enter the date");
var d = new Date();
var date = d.getDate();
date = userDate;
if(date < 16){
    document.write("First days of the month");
}
else{
    document.write("Last days of the month");
}
