'use strict'
//1.We saw that we can pass functions as arguments to other functions.
//Your task is to write a function that takes another function as an argument and runs it.
//http://conceptf1.blogspot.nl/2013/11/javascript-closures.html
function foo(func) {
    let doing = "What to do here?";
    let done = function () {
        console.log(doing);
        func();
        console.log("I am calling another function from inside this function. Also practicing Clusure!");
    };
    done();
}

function bar() {
    console.log('Hello, I am bar!');
}
foo(bar);
console.log("-------------------------0");

//You must write a function that takes 4 arguments. - A start value - An end value - 
//A callback to call if the number is divisible by 3 - A callback to use if the number is divisible by 5
//The function should generate an array containing values from start value to end value(inclusive).
//Then the function should iterate over the array and call the first callback if the array value is divisible by 3
//The function should call the second callback if the array value is divisible by 5
//Both functions should be called if the array value is divisible by both 3 and 5
function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    // make array 
    let theArray = [];
    // start at beginning of array and check if you should call threeCallback or fiveCallback or go on to next  
    
}
threeFive(10, 15, sayThree, sayFive);

// Should create an array [10,11,12,13,14,15]
// and call sayFive, sayThree, sayThree, sayFive  - please make sure you see why these calls are made before you start coding
