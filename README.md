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
