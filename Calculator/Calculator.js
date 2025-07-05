const c=6;
let b=5;
var a=4;

{
    let b=7;
    console.log("Inside scope let value",b);
    console.log("Inside sum",a+b);
}

console.log("variable",a);
console.log("outside scope Let variable ",b);
console.log("Const variable",c);
console.log("Inside sum",a+b);