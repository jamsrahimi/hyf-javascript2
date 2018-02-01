'use strict'
//1.We saw that we can pass functions as arguments to other functions.
//Your task is to write a function that takes another function as an argument and runs it.

function foo(func) {
    let doing = "What to do here?";
    let done=
}

function bar() {
    console.log('Hello, I am bar!');
}
foo(bar);
//http://conceptf1.blogspot.nl/2013/11/javascript-closures.html
function sayHelloToClosures(yourName) {
    var text = 'Hello Closures from' + yourName;
    var sayAlert = function () { alert(text); }
    sayAlert();
}