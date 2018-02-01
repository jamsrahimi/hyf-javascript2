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

