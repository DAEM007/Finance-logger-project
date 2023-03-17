# Finance Logger

> This Project is intended to strengthen my knowledge of TypeScript.

## Types and Inference in TypeScript

**Types in TypeScript**

let character = "Emmanuel";

let age = 24;

let isBlackBelt = false;

// character = 30 -- notice the error "Type 'number' is not assignable to type 'string'."

`character = "Damilola";` //no error -- so you can change the value but not the type of the variable

// age = "sam" -- notice the error "Type 'string' is not assignable to type 'number'."

`age = 23;`

// isBlackBelt = 50; -- notice the error "Type 'number' is not asignable to type 'boolean'."

`isBlackBelt = true;`

`const areaCir = (diameter: number) => {
    return diameter * Math.PI;
}`

// console.log(areaCir('hello')); -- notice in the console you see NAN

console.log(areaCir(2)); // notice that when you specify the type 'number', it doesn't accept anything other than a number...

**Inference in TypeScript**

*Note: That when you don't specify a type in TypeScript, TypeScript infers the type from your input value.*

## Arrays and objects in TypeScript

**Arrays**

`let characters = ["Emmanuel", "Damilola", "Ayobami"];`

`characters.push("Chidera");` // TS accepts this

// characters.push(30); -- notice the error

// characters[2] = 59 --notice the error

`let numbers = [20, 30, 45, 59, 60];`

`numbers.push(100);` // TS accepts this

// numbers.push("Emmanuel"); --notice the error

// numbers[2] = true --notice the error

`let mixed = ["Emmanuel", 30, true];`

`mixed.push(false);` // TS accepts this

mixed[0] = "Damilola"; //TS accepts this

mixed.push(50); //TS accepts this

**OBJECTS**

`let person = {
    name: "Chidera",
    age: 50,
    isBlackBelt: true
}`

// person.name = 80 --notice the error

`person.name = "Damilola"` // TS accepts this

// person.skills = ["critical thinking", "programming"] --notice TS doesn't accepts this as it doesn't follow the structure of the object

// person = {
//     name: "Emmanuel",
//     age: 23,
//     // isBlackBelt: true
// }

// notice from above that also when you comment property of isBlackBelt it throws an error since it doesn't follow the structure of the person object

## Explicit types

`let character: string;`

`let age: number;`

`let isBlackBelt: boolean;`

// age = "Emmanuel" -- notice the error

`age = 40;` // TS accepts this...and similarly to other variables declared above...

**Explicit types for arrays**

`let cars: string[];`

// cars.push("BMW"); --notice the error in the browser console. This is because we should have initialized it to be an empty array to begin with...notice the code below

`let countries: string[] = [];`

countries.push("Alaska") //Notice you don't get an error in the browser console now...This is because we initilized it with an empty array

**union types**

`let person: (string|number|boolean)[] = [];`

`person.push(23);` //TS accepts this

`person.push(true);` //TS accepts this

`person.push("Damilola");` // TS accepts this

// or we can have

`let uid: string|number;`

`uid = 50;` //TS accepts this

`uid = "Emmanuel";` //TS accepts this

**Explicit types for objects**

`let insaneCoder: object = {
    name: "Emmanuel",
    age: 24,
    isBlackBelt: true
}`

`insaneCoder = ["Damilola", 24, true];` //TS accepts this since array is a type of object

// insaneCoder = "Damilola" --notice that TS doesn't accept this since it is not an object
