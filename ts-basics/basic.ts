// primitives

let age : number;

let username: string;

let isInstructor : boolean;

/* let hobbies : null; */


// more complex types

let hobbies : string[];

hobbies = ["sports", "surfing"];

type Person = {
    name: string;
    age : number;

}
let person : Person;

person = {
    name : "Max",
    age : 32
}

// Type inference

let course : string | number = "React Typescript"

course = 123;


//function  types

function add ( a: number,b : number) {
    return a+b;
}

function printout(value: any) {
console.log (value);
}

// Generics

function insertAtBeginning<T>(array:T[],value:T) {
    const newArray = [value,...array];
    return newArray;
}

const demoArray = [ 1,2,3];

const updatedArray = insertAtBeginning(demoArray,-1);
console.log(updatedArray)