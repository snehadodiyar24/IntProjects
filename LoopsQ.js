//Q1:hello 10 times
var i=1;
while(i<=10){
    console.log("Hello");
    i++;
}
//Q2:1 to 10
var i=1;
while(i<=10){
    console.log(i);
    i++;
}
//Q3:table
var i=1;
var num=2;
while(i<=10){
    var mult=i*num;
    console.log(mult);
    i++;
}
//Q4:alternative table
var i=1;
var num=2;
while(i<=20){
   if(i%2!==0){
    var mult=i*num;
    console.log(mult);
   }
   i++;
}

//Q5:two numebr input raised to the power another
var a = 2;
var b = 3;
var result = 1;

for (let i = 1; i <= b; i++) {
    result = result * a;
}

console.log(a + " raised to the power " + b + " is: " + result);

//Q6:even no 1 to 100
var num=100;
for(let i=1;i<=num;i++){
    if(i%2==0){
        console.log(i);
    }
}

//Q7:1234 sum of digits
var a=1234;
var sum=0;
while(a>0){
    var digit=a%10;
   sum+=digit;
   a=parseInt(a/10);
}
console.log(sum);

//Q8:Prime or not
var a=10;
for(let i=2;i<7;i++){
    if(a%i==0){
        console.log("The num is not prime");
        break;
    }
    else{
        console.log("The num is prime");
        break;
    }
}
//Q9:Sum of digits bw 1 to 10
var a=10;
var sum=0;
for(let i=1;i<=10;i++){
    sum+=i;
}
console.log(sum);

//Q10:Factorial
var a=5;
var fact=1;
for(let i=1;i<=5;i++){
    fact=fact*i;
}
console.log(fact);

//q11:Reverse
var num = 1234;  
var reversed = 0;
var temp = num;

while (temp > 0) {
    var digit = temp % 10;         // Get last digit
    reversed = reversed * 10 + digit;  // Append digit
    temp = Math.floor(temp / 10);  // Remove last digit
}
console.log("Reversed number: " + reversed);

//Q12:pallinfrome
var num = 1221; 
var original=num; 
var reversed = 0;
var temp = num;

while (temp > 0) {
    var digit = temp % 10;         
    reversed = reversed * 10 + digit;  
    temp = Math.floor(temp / 10); 
}
console.log("Reversed number: " + reversed);
if(original==reversed){
    console.log("The enterd num is pallindrome");
}
else{
    console.log("The num is not a pallindrome");
}

//Q13:Febonacii series
var a = 0;
var b = 1;
var num = 10;
console.log(a); // First term
console.log(b); // Second term

for (let i = 2; i < num; i++) {
    var next_term = a + b;
    console.log(next_term);
    a = b;
    b = next_term;
}

//Q14:take 10 no input and find it is -ve +ve or zero
var n1 = 5;
var n2 = -3;
var n3 = 0;
var n4 = 7;
var n5 = -8;
var n6 = 12;
var n7 = 0;
var n8 = -1;
var n9 = 4;
var n10 = -6;


  if (n1> 0) {
    console.log(n1+ " is Positive");
  } else if (n1 < 0) {
    console.log(n1 + " is Negative");
  } else {
    console.log(n1 + " is Zero");
  }

  //Q15:HCF
  var a=12;
  var b=14;
  var min=Math.min(a,b);
  for(let i=min;i>=1;i--){
    if(a%i==0 && b%i==0){
        console.log("hcf is: "+i);
        break;
    }
  }





