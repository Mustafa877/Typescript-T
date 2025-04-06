// let greet: Function;

// example 1
let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
}

// example 2
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
  if (action === 'add') {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
}

// example 3
let logDetails: (obj: {name: string, age: number}) => void;

logDetails = (school: {name: string, age: number}) => {
  console.log(`${school.name} is ${school.age} years old`);
}

logDetails({name: 'John', age: 20});



