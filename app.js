// • Write a loop to print numbers from 1 to 10.


for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// • Write a loop to print even numbers from 1 to 20.

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}


// • Write a loop to print odd numbers from 1 to 15.

for (let i = 1; i <= 15; i += 2) {
    console.log(i);
}


// • Write a loop to calculate and print the factorial of a number (let's say 5).

let number = 5;
let factorial = 1;
for (let i = 1; i <= number; i++) {
    factorial *= i;
}
console.log("The factorial of", number, "is:", factorial);


// • Write a loop to print the multiplication table of a number (let's say 7) up to 10.

let number1 = 7;


console.log("Multiplication table of", number1, "up to 10:");
for (let i = 1; i <= 10; i++) {
    console.log(number1 + " * " + i + " = " + (number1* i));
}


// • Write a loop to print the Fibonacci series up to the 10th term. (The Fibonacci sequence is a type series where each number is the sum of the two that precede it. It starts from 0 and 1 usually. The Fibonacci sequence is given by 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, and so on.-10)



let numTerms = 10;
let term1 = 0;
let term2 = 1;
console.log("Fibonacci series up to the", numTerms + "th term:");
console.log(term1);
console.log(term2);
for (let i = 3; i <= numTerms; i++) {
    let nextTerm = term1 + term2;
    console.log(nextTerm);
    term1 = term2;
    term2 = nextTerm;
}


// • Write a loop to find and print the sum of digits of a number (let's say 123).


let num = 123;
let sumOfDigits = 0;
let numAsString = num.toString();
for (let i = 0; i < numAsString.length; i++) {
    sumOfDigits += parseInt(numAsString[i]);
}
console.log("Sum of digits of", num, "is:", sumOfDigits);



// Write a loop to print the reverse of a string (let's say "hello").


let str = "hello";
let reversedStr = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
}
console.log("Reverse of", str, "is:", reversedStr);


// • Write a loop to print the square of numbers from 1 to 10.

console.log("Square of numbers from 1 to 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i + " squared is " + (i * i));
}


// • Write a loop to find and print the smallest element in an array (let's say [3, 7, 2, 9, 5]).


let arr = [3, 7, 2, 9, 5];
let smallestElement = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallestElement) {
        smallestElement = arr[i];
    }
}
console.log("The smallest element in the array is:", smallestElement);





