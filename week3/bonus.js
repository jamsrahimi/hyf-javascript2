'use strict'

//8.Write a function that would allow you to do this:

function addSix(z) {
    return 6 + z;
}
console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27

//Bonus: Write a function takes this array['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'] and returns an array which only 
//has unique values in it(so it removes the duplicate ones).Make it a 'smart' algorithm that could do it for 
//every array(only strings / number).Try to make it as fast as possible!
function find_duplicate_in_array(arra1) {
    let i,
        len = arra1.length,
        result = [],
        obj = {};
    for (i = 0; i < len; i++) {
        obj[arra1[i]] = 0;
    }
    for (i in obj) {
        result.push(i);
    }
    return result;
}
var arr = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];
console.log(find_duplicate_in_array(arr));
//ref: https://www.w3resource.com/javascript-exercises/javascript-array-exercise-20.php
