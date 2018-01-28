
/**
 * Profile Lookup
We have an array of objects representing different people in our contacts lists.
A lookUpProfile function that takes firstName and a property (prop) as arguments has been pre-written for you.
The function should check if firstName is an actual contact's firstName and the given property (prop) is a property of that contact.
If both are true, then return the "value" of that property.
If firstName does not correspond to any contacts then return "No such contact"
If prop does not correspond to any valid properties then return "No such property"
 */

//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


// function lookUpProfile(firstName, prop) {
// // Only change code below this line
// let x = "";
// let y = "";
// let z = "";
// let abc = "";
// let proper = "";

// for (let i = 0; i < contacts.length; i++) {
//     x = contacts[i].firstName;
//     y = contacts[i].lastName;
//     z = contacts[i].number;
//     // console.log(x + y + z);
//     for (let n = 0; n < contacts[i].likes.length; n++) {
//         abc = contacts[i].likes[n];
//         // console.log(abc + "\n");
//     }  
// }
// switch (prop) {
//     case y:
//         proper = y;
//         break;
//     case z:
//         proper = z;
//         break;
//     case abc:
//         proper = abc;
//         break;
//     default:
//         prop = "No such property";
// }
// console.log(abc);
// if (proper === prop && x === firstName) {
//     return proper;
// }
// // Only change code above this line
// }

// // Change these values to test your function
// console.log(lookUpProfile("Akira", "Coding"));

function lookUpProfile(firstName, prop) {
    // Only change code below this line
    for (var x = 0; x < contacts.length; x++) {
        if (contacts[x].firstName === firstName) {
            if (contacts[x].hasOwnProperty(prop)) {
                return contacts[x][prop];
            } else {
                return "No such property";
            }
        }
    }
    return "No such contact";
    // Only change code above this line
}

// Change these values to test your function
console.log(lookUpProfile("Akira", "likes"));

var str = 'Twas the night, before Xmas...';
var newstr = str.replace(/[aeiu]/gi, '');
console.log(newstr);  // Twas the night before Christmas..