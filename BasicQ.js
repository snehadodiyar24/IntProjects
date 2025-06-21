//Q1: print hello
console.log("Hello");

//Q3: addition 
var a=2;
var b=4;
console.log("Sum is : "+a+b);

//Q4: simple interest
var p=100;
var r=10;
var t=2;
var si=(p*r*t)/100;
console.log("The Simple Interest is :" +si);

//Q5:Average of 5 sub
var s1=95;
var s2=98;
var s3=90;
var s4=89;
var s5=95;
var Avg=(s1+s2+s3+s4+s5)/5;
console.log("Average of five subjects is : "+Avg);

//Q6:Gross Salary
var basicSalary = 10000;
var da = 0.40 * basicSalary;
var hra = 0.20 * basicSalary; 
var grossSalary = basicSalary + da + hra;
console.log("Ramesh's Gross Salary is: ₹" + grossSalary);
 
//Q7:Area of Circle and Rectangle
var r=5;
var area1=3.14*r*r;
var l=10;
var b=5;
var area2=l*b;
console.log("Area of circle is : "+area1);
console.log("Area of Rectangle  is : "+area2);

//Q8:  convert Fahrenheit (F) to Celsius (C)
var F=98.6;
var C = (F - 32) * 5/9;
console.log("The temp in  Celsius is :"+C);

//Q9: Interchange 
var C=5;
var D=3;
let temp=C;
C=D;
D=temp;
console.log("Swaped values of c is " +C+ " and D is "+D);

//Q10: SUM of first and last digits 

var a=1234;
var Forthdigits=a%10;
a=Math.floor(a/10);
var Thirdigit=a%10;
a=Math.floor(a/10);
var secondigit=a%10;
a=Math.floor(a/10);
var firstdigit=a%10; var sum=Forthdigits+firstdigit;
console.log("SUM of first and last digits: "+ sum);

//Q11:Sum of middle elements
var a = 1234;
a = Math.floor(a / 10);
var third = a % 10;
a = Math.floor(a / 10);
var second = a % 10;
var sum = second + third;
console.log("Sum of middle two digits: " + sum);

//Q12:sum aof all digits
var a = 1234;
var sum=0;
var Forthdigits=a%10;
a=Math.floor(a/10);
var Thirdigit=a%10;
a=Math.floor(a/10);
var secondigit=a%10;
a=Math.floor(a/10);
var firstdigit=a%10;
 var sum=Forthdigits+Thirdigit+secondigit+firstdigit;
console.log("SUM of all digits: "+ sum);

//Q13:Reverse
var a = 1234;
var Forthdigits=a%10;
a=Math.floor(a/10);
var Thirdigit=a%10;
a=Math.floor(a/10);
var secondigit=a%10;
a=Math.floor(a/10);
var firstdigit=a%10;
console.log("Reverse is :"+Forthdigits+" "+Thirdigit+" "+secondigit+" "+firstdigit);



