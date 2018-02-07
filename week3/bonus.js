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
function findDuplicateInArray(array) {
    const obj = {};
    for (let i = 0; i < array.length; i++) {
        obj[array[i]] = 0;
    }
    const result = [];
    for (const key in obj) {
        result.push(key);
    }
    return result;
}
const arr = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c',1,3,8,2,4];
console.log(findDuplicateInArray(arr));
//ref: https://www.w3resource.com/javascript-exercises/javascript-array-exercise-20.php
//final version is Jim's correction!
