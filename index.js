"use strict";

function createGreeting(name, age) {
  const yearOfBirth = getYearOfBirth(age);
  return `Hello, my name is ${name} and I am ${age}. I was born in ${yearOfBirth}`;
}

function getYearOfBirth(age) {
  return 2018 - age;
}

const greeting = createGreeting("Gabriel", 23);
console.log(greeting);
