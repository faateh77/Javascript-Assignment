document.write("<h1>The Shopping Cart</h1>" + "<br>");
var item1 = 650;
var item1Quantity = 3;
var item1Total = item1 * item1Quantity;
document.write("The price of the item 1 is:" + item1 + "<br>");
document.write("The Quantity of the item 1 is:" + item1Quantity + "<br>");

var item2 = 100;
var item2Quantity = 7;
var item2Total = item2 * item2Quantity;

document.write("The price of the item 1 is:" + item2 + "<br>");
document.write("The Quantity of the item 2 is:" + item2Quantity + "<br>");
var shippingCharges = 100;
var Total =  item1Total + item2Total + shippingCharges;
document.write("Total cost of your order is:" + Total);