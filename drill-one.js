'use strict';

function createGreeting(name, age) {
  if (!name || !age) {
    throw new Error('Invalid arguments provided');
  }
  if (typeof age !== 'number' || typeof name !== 'string') {
    throw new TypeError();
  }
  const yearOfBirth = getYearOfBirth(age);
  return `Hello, my name is ${name} and I am ${age}. I was born in ${yearOfBirth}`;
}

function getYearOfBirth(age) {
  if (age < 0) {
    throw new Error('Age cannot be negative');
  }
  return 2018 - age;
}

try {
  const greeting = createGreeting('Gabriel', 23);
  console.log(greeting);
} catch (error) {
  console.error(error);
}
