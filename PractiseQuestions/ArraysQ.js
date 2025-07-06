//  Q1:
// let arr = [1, 2, 3, 5];
// console.log("The original array is",arr);
let arr = [];

for (let i = 1; i <= 100; i++) {
    if (i !== 2) {
        arr.push(i);
    }
}
let n=arr.length+1;
let idx=0;
for ( idx = 1; idx <= n; idx++) {
    if (!arr.includes(idx)) {
        arr.push(idx); 
        break;        
    }
}
console.log("The missing number is ",idx);
console.log("Fixed array:", arr);

//Q2.
let arr2 = [1, 2, 3, 4, 2, 5, 6, 7, 3, 8, 9, 3];
let duplicate = [];
for (let i = 0; i < arr2.length; i++) {
    for (let j = i + 1; j < arr2.length; j++) {
        if (arr2[i] === arr2[j] && !duplicate.includes(arr2[j])) {
            duplicate.push(arr2[j]);
        }
    }
}
console.log("Duplicate elements are:", duplicate);

//Q3.
let arr3 = [1, 2, 3, 4, 2, 5, 6, 7, 3, 8, 9, 3];
let found = false;
for (let i = 0; i < arr3.length; i++) {
    for (let j = i + 1; j < arr3.length; j++) {
        if (arr3[i] === arr3[j]) {
            console.log("The first duplicate element is", arr3[j]);
            found = true;
            break;
        }
    }
    if (found) break;
}


//Q4.
let arr4 = [1, 2, 3, 4, 2, 5, 6, 7, 3, 8, 9, 3];
let withoutdup = [];
for (let i = 0; i < arr4.length; i++) {
    if (!withoutdup.includes(arr4[i])) {
        withoutdup.push(arr4[i]);
    }
}
console.log("After removing duplicate elements:", withoutdup);

//Q5.
let a1=[1,2,3,4,5];
let a2=[2,3,1,0,5];
for(let i=0;i<a1.length;i++){
    if(!a2.includes(a1[i])){
        console.log("The element", a1[i], "is not present in a2");
    }
}


//  Q6.
let b1=[1,2,3,4,5];
let b2=[2,3,1,0,5];
if(b1.length==b2.length){
    console.log("both arrays are of same size");
}
else{
    console.log("Not of same size");
}

//Q7,   Q8  ,Q9
let c1=[5,4,3,2,1];
let l=c1.length;
c1.sort();
console.log(c1);
console.log("The max is ", c1[l-1]);
console.log("The min is ",c1[0]);
console.log("The second largest is ",c1[l-2]);
console.log("Top two top max elemnt",c1[l-1],"and",c1[l-2]);

//Q10
//Method 2
let d1=[1,2,3,4,5];
d1.reverse();
console.log(d1);

//Q11

let rev = [1, 2, 3, 4, 5];
//Method 1
let ans = [];
let j = 0;
for (let i = rev.length - 1; i >= 0; i--) {
    ans[j++] = rev[i];
}
console.log("Reversed array:", ans);

//Q13.
let a=[1,2,3,4];
a.push(9);
console.log(a);

//Q14
let ar = [1, 2, 3, 4, 5];
let index = 2;
let value = 100;
for (let i = ar.length; i > index; i--) {
    ar[i] = ar[i - 1];
}
ar[index] = value;
console.log(ar);  

//Q15
let b=[1,2,3,4,5];
console.log(b.pop());
console.log(b);

//Q17
let ar2 = [1, 2, 3, 4, 5];
let deleted = [];
let indexToDelete = 2; 
let newArr = [];

for (let i = 0; i < ar2.length; i++) {
    if (i === indexToDelete) {
        deleted.push(ar2[i]); 
        continue;           
    }
    newArr.push(ar2[i]);      
}

console.log("Deleted element:", deleted);
console.log("Array after deletion:", newArr);

//Q18
let aray=[1,2,3,4,5];
let sum=0;
for(let i=0;i<aray.length;i++){
    sum+=aray[i];
}
console.log(sum);

//Q19,20
let z = [1, 2, 3, 4, 5];
let odd = [];
let even = [];
for (let i = 0; i < z.length; i++) {
    if (z[i] % 2 !== 0) {
        odd.push(z[i]);   
    } else {
        even.push(z[i]);  
    }
}
console.log("Odd elements are:", odd);
console.log("Even elements are:", even);


// 6 Questions are left
