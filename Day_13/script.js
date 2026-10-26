// const studentName = "Likhilesh";
// const city = "Delhi";
// const college = "KRMU";
// const rollNumber = "2616400901";

// ----------------------------------

// const title = "Hello";

// const student = {
//     name: "Likhilesh",
//     city: "Delhi",
// };

// console.log(student);
// console.log(typeof student);

// READ
// console.log(student.name);
// console.log(student["name"]);

// // READ (not present) --> undefined
// console.log(student.phoneNumber);
// console.log(student["phoneNumber"]);

// // CREATE
// student.country = "INDIA";
// console.log(student);

// // UPDATE
// student.city = "MUMBAI";
// console.log(student);

// DELETE
// delete student.name;
// delete student["city"];
// console.log(student);

// -----------------------------------------------
// const age = 50;

// age = 50;
// // -----------------------------------------------

// const product = {
//     title: "Monitor",
//     price: 7000,
// };

// const keyboard = product;

// keyboard.title = "Keyboard"; // mutate
// console.log(keyboard);
// console.log(product);

// keyboard = { title: "Monitor", price: 7000 };
// -------------------------------------------------

const fruitsArr = ["Mango", "Grapes"];
console.log(fruitsArr);
const fruitsObj = {
    0: "Mango",
    1: "Grapes",
};
console.log(fruitsObj);
console.log(typeof fruitsArr);
console.log(typeof fruitsObj);

// READ
console.log(fruitsArr[0]);
console.log(fruitsObj[0]);

// CREATE
// fruitsArr[20] = "Apple";
// fruitsObj[20] = "Apple";
// console.log(fruitsArr);
// console.log(fruitsObj);
fruitsArr.push("Apple");
