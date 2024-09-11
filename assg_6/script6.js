// Question 1
var a = 10;
++a;
console.log();
(a);
a++;
console.log(a);
--a;
console.log(a);
a--;
console.log(a);
// Question2
var c = 2 , d = 1;
var result1 = --c - --d  ;
console.log(result1);
var result2 = ++d + d--  ;
console.log(result2);
--c;
console.log(c);
console.log(--c - --d);
console.log(--c - --d + ++d);
console.log(--c - --d + ++d + d--);
console.log(c);
console.log(d);
// Question3
var userName = prompt("write your name");
alert("Dear " + userName + " welcome to this page \n how i help you.....")
// Question4

var table =  prompt("enter a number") ;
table = parseInt(table)
var alpha = "x"

if (table) {
document.write(table + alpha + 1 + "= " + table*1 +  "<br>")
document.write(table + alpha + 2 + "= " + table*2 +  "<br>")
document.write(table + alpha + 3 + "= " + table*3 +  "<br>")
document.write(table + alpha + 4 + "= " + table*4 +  "<br>")
document.write(table + alpha + 5 + "= " + table*5 +  "<br>")
document.write(table + alpha + 6 + "= " + table*6 +  "<br>")
document.write(table + alpha + 7 + "= " + table*7 +  "<br>")
document.write(table + alpha + 8 + "= " + table*8 +  "<br>")
document.write(table + alpha + 9 + "= " + table*9 +  "<br>")
document.write(table + alpha + 10 + "= " + table*10 + "<br>")
}
else {
document.write(5 + alpha + 1 + "= " + 5*1 +  "<br>")
document.write(5 + alpha + 2 + "= " + 5*2 +  "<br>")
document.write(5 + alpha + 3 + "= " + 5*3 +  "<br>")
document.write(5 + alpha + 4 + "= " + 5*4 +  "<br>")
document.write(5 + alpha + 5 + "= " + 5*5 +  "<br>")
document.write(5 + alpha + 6 + "= " + 5*6 +  "<br>")
document.write(5 + alpha + 7 + "= " + 5*7 +  "<br>")
document.write(5 + alpha + 8 + "= " + 5*8 +  "<br>")
document.write(5 + alpha + 9 + "= " + 5*9 +  "<br>")
document.write(5 + alpha + 10 + "= " + 5*10 +  "<br>")
}











