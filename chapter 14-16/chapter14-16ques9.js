
var colors = ["red","orange","yellow","violet","green"];
/*9a*/
document.write("<h3>Addition at the start of the array</h3>");
var colorAddFirst = prompt("Enter color you want to add in beginning of the array");
colors.unshift(colorAddFirst);
document.write(colors+"<br>");
/*9b*/
document.write("<h3>Addition at the end of the array</h3>");
var colorAddEnd = prompt("Enter color you want to add in the end of the array");
colors.push(colorAddEnd);
document.write(colors+"<br>");
document.write("<h3>Remove item at the end of the array</h3>");
var colorRemoveEnd = prompt("Enter color you want to remove in the end of the array");
colors.pop(colorRemoveEnd);
document.write(colors+"<br>");
/*9c*/
document.write("<h3>Addition of two more items at the start of the array</h3>");
var colorAddFirst = prompt("Enter the two colors you want to add in beginning of the array again");
colors.unshift(colorAddFirst);
document.write(colors+"<br>");
/*9d*/
document.write("<h3>Now delete the first item at the start of the array</h3>");
var colorRemoveFirst = prompt("Delete first item now in array");
colors.shift(colorRemoveFirst);
document.write(colors+"<br>");
/*9e*/
document.write("<h3>Now delete the last item at the end of the array</h3>");
var colorRemovelast = prompt("Delete last item now in array");
colors.pop(colorRemovelast);
document.write(colors+"<br>");
/*9f*/
document.write("<h3>Now You can add item anywhere you want in array</h3>");
var colorAddAnywhere = prompt("Delete last item now in array");
colors.splcce(colorAddAnywhere);
document.write(colors+"<br>");
/*9g*/
document.write("<h3>Now delete the last item at the end of the array</h3>");
var colorRemovelast = prompt("Delete last item now in array");
colors.pop(colorRemovelast);
document.write(colors+"<br>");






