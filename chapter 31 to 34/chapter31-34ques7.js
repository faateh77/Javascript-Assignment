var time = +prompt("enter the  time");
var d = new Date();
var meridian = d.getHours();
meridian = time;
if(meridian > 12){
    document.write("It's PM");
}
else{
    document.write("It's AM");
}

