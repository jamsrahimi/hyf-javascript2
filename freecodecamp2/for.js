'use strict'

/**
 * Iterate Through an Array with a For Loop
A common task in JavaScript is to iterate through the contents of an array. One way to do that is with a for loop. This code will output each element of the array arr to the console:
    var arr = [10,9,8,7,6];
    for (var i=0; i < arr.length; i++) {
       console.log(arr[i]);
    }
Remember that Arrays have zero-based numbering, which means the last index of the array is length - 1. Our condition for this loop is i < arr.length, which stops when i is at length - 1.
Instructions
Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.
 */

// Example
var ourArr = [9, 10, 11, 12];
var ourTotal = 0;
for (var i = 0; i < ourArr.length; i++) {
    ourTotal += ourArr[i];
}
// Setup
let myArr = [2, 3, 4, 5, 6];
// Only change code below this line
let total = 2;
for (var j = 0; j < myArr.length; j++) {
    total += myArr[j];
}
console.log(total);

/**
 * Nesting For Loops
If you have a multi-dimensional array, you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays. Here is an example:
    var arr = [
      [1,2], [3,4], [5,6]
    ];
    for (var i=0; i < arr.length; i++) {
      for (var j=0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
      }
    }
This outputs each sub-element in arr one at a time. Note that for the inner loop, we are checking the .length of arr[i], since arr[i] is itself an array.
Instructions
Modify function multiplyAll so that it multiplies the product variable by each number in the sub-arrays of arr
 */

let arr = [
    [1, 2], [3, 4], [5, 6]
];
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        // console.log(arr[i]);

        // console.log(arr[j]);
        console.log(arr[i][j] * 2);
    }
}



function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    // Only change code above this line
    return product;
}
// Modify values below to test your code
console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));

