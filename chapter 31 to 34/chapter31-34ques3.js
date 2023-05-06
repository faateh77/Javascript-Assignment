var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var d = new Date();
var currentDay = days[d.getDay()];
document.write("Today is:" + " " + currentDay);