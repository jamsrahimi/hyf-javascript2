'use strict'
/**
 * Sometimes it is useful to check if the property of a given object exists or not. We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name. .hasOwnProperty() returns true or false if the property is found or not.
Example
    var myObj = {
      top: "hat",
      bottom: "pants"
    };
    myObj.hasOwnProperty("top");    // true
    myObj.hasOwnProperty("middle"); // false
Instructions
Modify the function checkObj to test myObj for checkProp. If the property is found, return that property's value. If not, return "Not Found".
 */

// Setup
const myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
    // Your Code Here
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    } else {
        return "Not Found";
    }
}
// Test your code by modifying these values
console.log(checkObj("gift"));

/**
 * Accessing Nested Objects
The sub-properties of objects can be accessed by chaining together the dot or bracket notation.
Here is a nested object:
    var ourStorage = {
      "desk": {
        "drawer": "stapler"
      },
      "cabinet": {
        "top drawer": {
          "folder1": "a file",
          "folder2": "secrets"
        },
        "bottom drawer": "soda"
      }
    };
    ourStorage.cabinet["top drawer"].folder2;  // "secrets"
    ourStorage.desk.drawer; // "stapler"
Instructions
Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable. Use bracket notation for properties with a space in their name.
 */

// Setup
const myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};
// Only change code below this line
const gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line
console.log(gloveBoxContents);
