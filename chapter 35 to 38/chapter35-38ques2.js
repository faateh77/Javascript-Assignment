var firstName= prompt("enter the first name");
var lastName= prompt("enter the last name");

var greetUser = fullName(firstName,lastName);
function fullName(fname,lname) {
    var fullname = fname + lname;
    return fullname;
}

document.write("Welcome" + " " + greetUser);