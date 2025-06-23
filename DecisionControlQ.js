//Q1:Print number if -ve;
var a=2;
if(a<0){
console.log("The negative num "+a);
}
else{
    console.log("The num is positive");
}

//Q2:Even Odd
var num=2;
if(a%2==0){
    console.log("The input is even");
}
else{
    console.log("The input is odd");
}

//Q3:pass fail
var s1 = 50;
var s2 = 50;
var s3 = 45;
var s4 = 40;
var s5 = 50;
var percentage=(s1+s2+s3+s4+s5)/5;
         if(percentage>=50){
    console.log("PASS");
       }
         else{
    console.log("FAIL");
       }

//Q4:Leap year
var n=2000;
        if(n%400==0 || (n%4==0) && (n%100!=0)){
           console.log("Year is a leap yaer");
        }
        else{
            console.log("Year is not a leap year");
        }
       
 //Q5:Discount
    var Iteam_Cost=500;
    var Discount=0.1;
    var total_Expense;
    if(Iteam_Cost>=1000){
       total_Expense=Iteam_Cost*Discount;
       console.log("Total Price to pay with Discount "+total_Expense);
    }
    else{
        
        console.log("Total Prise to pay without Discount "+Iteam_Cost);
    }

  //Q6:Divison
  var s1 = 50;
var s2 = 50;
var s3 = 45;
var s4 = 40;
var s5 = 50;
var percentage=(s1+s2+s3+s4+s5)/5;
  if(percentage>=60){
console.log("FIRST DIVISION");
   }
   else if(percentage >=50 && percentage<=59){
    console.log("SECOND DIVISION");
   }
   else if(percentage>=40 && percentage<=49){
    console.log("THIRD DIVISION");
}
   else{
    console.log("FAIL");
}

//Q7:Driver to be INSURED OR NOT
     var maritalStatus = "unmarried"; 
     var sex = "female";              
     var age = 26;                    
      if (maritalStatus === "married") {
    console.log("Driver is insured.");
       } else if (maritalStatus === "unmarried" && sex === "male" && age > 30) {
           console.log("Driver is insured.");
       } else if (maritalStatus === "unmarried" && sex === "female" && age > 25) {
           console.log("Driver is insured.");
      } else {
           console.log("Driver is NOT insured.");
        }

//Q8:Reversed number is same as input or not
    var num = 11111;
    var original=num;
    var reversed=0;
    while (num > 0) {
    var digit = num % 10;
    reversed=reversed*10+digit;
    num = parseInt(num / 10);
}
console.log(reversed+" ");
if(reversed==original){
    console.log("Input num and Reversed num is same");
}
else{
    console.log("They are not same");
}
// Q9:Youngest among three
var age1=45;
var age2=30;
var age3=50;
if(age1<age2 && age1<age3){
    console.log("Person 1 is youngest");
}
else if(age2<age1 && age2<age3){
console.log("Person 2 is youngest");
}
else if(age3<age1 && age3<age2){
    console.log("Person 3 is youngest");
}
else{
    console.log("Two or more have the same age");
}
//Q10:Valid Triangle or not
var a1=60;
var a2=60;
var a3=60;
if((a1+a2+a3)==180){
    console.log("Valid Triangle");
}
else{
    console.log("Not valid");
}
 
//Q11:Absolut value
var a=3;
if(a<0){
    a*=-1;
    console.log(a);
}
else{
    console.log(a);
}

//Q12:Area and Perimeter of rectangle
var length = 5; 
var breadth = 4;  

var area = length * breadth;
var perimeter = 2 * (length + breadth);

console.log("Area of rectangle is: " + area);
console.log("Perimeter of rectangle is: " + perimeter);
if(area>perimeter){
    console.log("Area is greater then perimetr");
}
else{
    console.log("Permimeter is greater or equal");
}
 

//Q17:valid triangle
var s1=60;
var s2=60;
var s3=60;
if((s1+s2)>s3 || (s2+s3)>s1 || (s1+s3)>s2){
    console.log("Valid Triangle");
}
else{
    console.log("Not valid");
}

