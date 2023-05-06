var num1 = +prompt("Enter number 1");
var num2 = +prompt("Enter number 2");
var op = prompt("Enter the operation");
var calc;



if(op=='addition'||op=='Addition'||op=='+'){
   calc = add(num1,num2);
   document.write(calc);
}
else if(op=='subtraction'||op=='subtraction'||op=='-'){
    calc = diff(num1,num2);
    document.write(calc);
 }
 else if(op=='multiplication'||op=='Multiplication'||op=='*'){
    calc = mul(num1,num2);
    document.write(calc);
 }
 else if(op=='division'||op=='Division'||op=='/'){
    calc = div(num1,num2);
    document.write(calc);
 }
function add(n1,n2){
    var a = n1 + n2;
        return a;
    }
    function diff(n1,n2){
        var d = n1 - n2;
            return d;
        }
        function mul(n1,n2){
            var m = n1 * n2;
                return m;
            }
            function div(n1,n2){
                var di = n1 / n2;
                    return di;
                }
            
