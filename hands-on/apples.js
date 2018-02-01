function eatAnything(foodStuff) {
    console.log('Eating ' + foodStuff + ': crunch, crunch,  ...burp');
    return 'Thanks for the ' + foodStuff + '.';
}

console.log('Passing some falafel...');
console.log(eatAnything('falafel'));

console.log('\nPassing an apple...');
console.log(eatAnything('apple'));