"use strict";

function createGreeting(name, age) {
  const yearOfBirth = 2018 - age;
  return `Hello, my name is ${name} and I am ${age}. I was born in ${yearOfBirth}`;
}

const greeting = createGreeting("Gabriel", 23);
console.log(greeting);
