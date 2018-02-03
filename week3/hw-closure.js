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
console.log("End of Q1---------------------------0");

//You must write a function that takes 4 arguments. - A start value - An end value - 
//A callback to call if the number is divisible by 3 - A callback to use if the number is divisible by 5
//The function should generate an array containing values from start value to end value(inclusive).
//Then the function should iterate over the array and call the first callback if the array value is divisible by 3
//The function should call the second callback if the array value is divisible by 5
//Both functions should be called if the array value is divisible by both 3 and 5
// function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
// Should create an array [10,11,12,13,14,15]
// and call sayFive, sayThree, sayThree, sayFive  - please make sure you see why these calls are made before you start coding

function sayThree(aParameter) {
    console.log(aParameter + " is dividable by 3");
}//sayThree and sayFive is created because of showing what is being printed, an extra info for showing the result.
function sayFive(aParameter) {
    console.log(aParameter + " is dividable by 5");
}
function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    const numbers = [];

    for (let i = startIndex; i <= stopIndex; i++) {
        numbers.push(i);
    }
    console.log(numbers);
    numbers.forEach(function (num) {
        if (num % 3 !== 0 && num % 5 !== 0) {
            console.log(num + " is either Prime or divisible by 2.");
        }
        if (num % 3 === 0) {
            threeCallback(num);
        }
        if (num % 5 === 0) {
            fiveCallback(num);
        }
        if (num % 3 === 0 && num % 5 === 0) {
            console.log(num + " is divisible by 3 and 5.");
        }
    });
}

threeFive(9, 20, sayThree, sayFive);
console.log("End of Q2---------------------------0");
//3. Please solve this problem using: https://www.freecodecamp.com/challenges/repeat-a-string-repeat-a-string
//3.1 A for loop.
function repeatStringNumTimes(str, num) {
    str = typeof num !== 'number' || num > 0 ? str : "";
    let newString = "";
    for (let count = 0; count < num; count++) {
        newString += str;//https://www.freecodecamp.org/challenges/appending-variables-to-strings
    }
    return newString;
}

console.log(repeatStringNumTimes("Study", 3));

console.log("End of Q3.1-------------------------0");
//3.2 A while loop.
function repeatStringNumTimesWhile(str, num) {
    str = typeof num !== 'number' || num > 0 ? str : "";
    let newStringWhile = "";
    let j = 0;
    while (j < num) {
        newStringWhile += str;
        j++;
    }
    return newStringWhile;
}
//https://www.freecodecamp.org/challenges/iterate-with-javascript-while-loops
console.log(repeatStringNumTimesWhile("Study", 3));

console.log("End of Q3.2-------------------------0");
//3.3 A do loop.
function repeatStringNumTimesDoWhile(str, num) {
    str = typeof num !== 'number' || num > 0 ? str : "";
    let newStringDoWhile = "";
    let k = 0;
    do {
        newStringDoWhile += str;
        k++;
    }
    while (k < num)
    return newStringDoWhile;
}

console.log(repeatStringNumTimesDoWhile("Study", -6));

console.log("End of Q3.1-------------------------0");
//4. Some practice with objects https://www.freecodecamp.com/challenges/construct-javascript-objects-with-functions
let Car = function () {
    this.wheels = 4;
    this.engines = 1;
    this.seats = 5;
};
// Only change code below this line.
let MotorBike = function () {
    this.wheels = 2;
    this.engines = 1;
    this.seats = 1;
};
console.log("End of Q4---------------------------0");
//5. Nested loops https://www.freecodecamp.com/challenges/nesting-for-loops
function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    // Only change code above this line
    return product;
}
// Modify values below to test your code
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
console.log("End of Q5---------------------------0");

//6. We did some work with arrays - var arr = [1,2,3] We can also nest arrays inside arrays like this var arr2d = [[1,2], 
//[3,4], [5,6]] (for math people you can think of this as a matrix)
//How would you print all the items of an array with 3 dimensions? How about with K dimensions?
//What if you didn't know how deep the array was nested? (You don't have to write code for this but think about it)

