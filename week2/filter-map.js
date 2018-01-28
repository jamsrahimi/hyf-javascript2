'use strict'

//1.Say you would like to write a program that doubles the odd numbers in an array and throws away the even number.
let numbers = [1, 2, 3, 4];
let newNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        newNumbers.push(numbers[i] * 2);
    }
}
console.log("The doubled numbers are", newNumbers + "\n"); // [2, 6]
//Rewrite the above program using map and filter don't forget to use =>
let newNumbers1 = numbers.filter(y => y % 2 !== 0);
console.log("Filtered odds ", newNumbers1, "\n");
let newNumbers2 = newNumbers1.map(x => x * 4);
console.log("doubled(double)=>Quadrupled the numbers as: " + newNumbers2);
console.log("===================================0");

//Underneath you see a very interesting small insight in Maartje's work:
let monday = [
    {
        name: 'Write a summary HTML/CSS',
        duration: 180
    },
    {
        name: 'Some web development',
        duration: 120
    },
    {
        name: 'Fix homework for class10',
        duration: 20
    },
    {
        name: 'Talk to a lot of people',
        duration: 200
    }
];

let tuesday = [
    {
        name: 'Keep writing summary',
        duration: 240
    },
    {
        name: 'Some more web development',
        duration: 180
    },
    {
        name: 'Staring out the window',
        duration: 10
    },
    {
        name: 'Talk to a lot of people',
        duration: 200
    },
    {
        name: 'Look at application assignments new students',
        duration: 40
    }
];

let tasks = monday.concat(tuesday);
const hourlyRate = 42.45;

//Solution1:

let total = 0;

tasks
    .map(task => task.duration / 60)
    .filter(duration => duration < 2)
    .map(duration => duration * hourlyRate)
    .forEach(amount => total += amount);

console.log(`Maartje has earned €${total.toFixed(2)}`);

//Solution2:

// const hourDurations = tasks.map(task => task.duration / 60);
// const shortDurations = hourDurations.filter(duration => duration < 2);
// const amounts = shortDurations.map(duration => duration * hourlyRate);

// let total = 0;
// amounts.forEach(amount => total += amount);

// console.log(`Maartje has earned €${total.toFixed(2)}`);

// //Solution3:

// const total = tasks
//     .map(task => task.duration / 60)
//     .filter(duration => duration < 2)
//     .map(duration => duration * hourlyRate)
//     .reduce((wage, amount) => wage + amount, 0)
//     .toFixed(2);

// console.log(`Maartje has earned €${total}`);

// //Solution4:
// const toHours = task => task.duration / 60;
// const lessThanTwo = num => num < 2;
// const timesRate = rate => duration => duration * rate;
// const add = (wage, amount) => wage + amount;

// const total = tasks
//     .map(toHours)
//     .filter(lessThanTwo)
//     .map(timesRate(hourlyRate))
//     .reduce(add, 0)
//     .toFixed(2);

// console.log(`Maartje has earned €${total}`);
// function makeIt(task) {
//     return tuesday.duration
// }
// let xx = makeIt(tasks);
// console.log(xx);
//2. Write a program that does the following below.Use map and filter.You will also need a forEach
//or a for loop for the 'summing up' part.
// Collect two days' worth of tasks.
// tasks.forEach(function (el, idx, arr) {
//     console.log(el);
// });
// const dur = tasks.name.map(function (person) {
//     console.log(person.name);

// });
// Convert the task durations to hours, instead of minutes.
// Filter out everything that took two hours or more(remove from the collection)
// Multiply the each duration by a per - hour rate for billing(you can decide yourself what
//Maartje should make per hour) and sum it all up.
// Output a formatted Euro amount.
//     Don't forget to use =>
