'use strict'
function eatAnything(foodStuff) {
    console.log('Eating ' + foodStuff + ': crunch, crunch, ...burp');
    return 'Thanks for the ' + foodStuff + '.';
}
console.log('Passing some Falafel...');
let result = eatAnything('falafel');
console.log(result);
console.log('\nPassing an apple...');
console.log(eatAnything('apple'));

const foodStuff = "something different";
console.log(foodStuff);