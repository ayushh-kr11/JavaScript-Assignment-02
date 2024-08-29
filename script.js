//Q1.Add two numbers
let a = 2;
let b = 5;

let result = a + b; 
console.log(result);

//Q2.Find if the conditions are obeyed or not?
let c = 5;
let d = 3;
let op = (c>=d) ? "True" : "False";
console.log(`The condition we have got is: ${op}`);


/*Q3.Check the conditions 
 You are given two numbers A and B. You need to do the following checks:
-if both are divisible by 10 console true.
-if both are not divisible by 10 console false.
-if one of them only is divisible by 10 console true.
*/
let num1 = 10;
let num2 = 10;

if ((num1%10 == 0) && (num2%10 == 0)) {
  console.log("True");
}
else if((num1%10 != 0) && (num2%10 != 0)){
console.log("False");
}
else if((num1%10 == 0) || (num2%10 == 0)){
console.log("Truee");
}


//Q4.Find the first digit of a 4 digit number 
let n = 4567;
let firstDigit = Math.floor(n / 1000); //Math.floor() use to round a number to the nearest integer
console.log(`first digit of the given number is: ${firstDigit}`); 

//Q5.Find the last digit of a 4 digit number 
let n1 = 4567;
let lastDigit = 4567%10; //it give remainder after dvision.
console.log(`Last digit of the given number is: ${lastDigit}`);

//Q6.Find the remainder
let num3 = 45;
let num4 = 10;

let remainder = num3%num4;
console.log(remainder);

//Q7.Multiply two Numbers
let num5 = 2;
let num6 = 5;

let num7 = num5*num6;
console.log(`Result after multiplying two numbers: ${num7}`);

//Q8. Marks Calculator 
let marks1 = 50;
let marks2 = 20;
let marks3 = 100;

let totalMarks = marks1 + marks2 + marks3;
let avgMark = (marks1 + marks2 + marks3) / 3;

console.log(`Total mark is ${totalMarks}`);
console.log(`Average mark is ${avgMark}`);
