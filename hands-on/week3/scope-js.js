'use strict'

const a = "Hello";
function myFunction() {
    const b = ", ";
    const root = document.getElementById("root");
    const h1 = document.createElement("h1");
    
   // if (root !== null) {
        const c = "World!";
        h1.innerHTML = a + b + c;
        root.appendChild(h1);
   // }
}
myFunction();
alert = 1;
alert("Done!");