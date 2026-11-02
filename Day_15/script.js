// // function declaration
// function greet() {
//     console.log("Hello, welcome to class!");
// }

// // invocation / call
// greet();
// greet();
// greet();

// ------------------------------------

// // function declaration
// function greet(studentName) {
//     console.log(`Hello, welcome ${studentName}!`);
// }

// // invocation / call
// greet("Ajay");
// greet("Anuj");
// greet("Yash");

// ------------------------------------
// "use strict";

// function printPrice(itemName, itemPriceInDollars) {
//     const printInInr = itemPriceInDollars * 100;
//     console.log(`${itemName} : ${printInInr}`);
// }

// // ------------------------------------
// printPrice("Kiwi", 2.49);
// printPrice("Honey", 6.99);

// ---------------------------------------
console.log("START");
function add(a, b) {
    const ans = a + b;
    // console.log(ans);
    return ans;
}

const result1 = add(2, 3);
const result2 = add(3, 4);
console.log(result1, result2);

console.log("END");

// ---------------------------------------------
// function check() {
//     return "done";
//     console.log("Will this print?");
// }
// console.log(check());
