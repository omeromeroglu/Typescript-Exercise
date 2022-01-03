// primitives
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var age;
var username;
var isInstructor;
/* let hobbies : null; */
// more complex types
var hobbies;
hobbies = ["sports", "surfing"];
var person;
person = {
    name: "Max",
    age: 32
};
// Type inference
var course = "React Typescript";
course = 123;
//function  types
function add(a, b) {
    return a + b;
}
function printout(value) {
    console.log(value);
}
// Generics
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demoArray = [1, 2, 3];
var updatedArray = insertAtBeginning(demoArray, -1);
console.log(updatedArray);
