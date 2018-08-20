'use strict';
function jediName(firstName, lastName) {
  return `${lastName.substring(0, 3)}${firstName.substring(0, 2)}`;
}

// console.log(jediName('Chelsea', 'Kent'));

function beyond(num) {
  if (num === Infinity || num === Number.NEGATIVE_INFINITY) {
    console.log('and beyond');
  } else if (num > 0 && num < Infinity) {
    console.log('to infinity');
  } else if (num < 0 && num > Number.NEGATIVE_INFINITY) {
    console.log('to negative infinity');
  } else if (num === 0) {
    console.log('staying at home');
  }
}

// console.log('positive');
// beyond(1);
// console.log('negative');
// beyond(-1);
// console.log('infinity');
// beyond(Infinity);
// console.log('0');
// beyond(0);
// console.log('negative infinity');
// beyond(Number.NEGATIVE_INFINITY);

// Cracking the code - take in string, split into array of individual letters, loop over array, check first character, decoded array, join into a string, log it

const codeString = 'craft block argon meter bells brown croon droop';
const codedStringArray = codeString.split(' ');
const decodedArray = [];

for (let i = 0; i < codedStringArray.length; i++) {
  decodedArray.push(decode(codedStringArray[i]));
}

function decode(word) {
  let decodedChar = '';

  if (word.startsWith('a')) {
    decodedChar = word.substr(1, 1);
  } else if (word.startsWith('b')) {
    decodedChar = word.substr(2, 1);
  } else if (word.startsWith('c')) {
    decodedChar = word.substr(3, 1);
  } else if (word.startsWith('d')) {
    decodedChar = word.substr(4, 1);
  } else {
    decodedChar = ' ';
  }

  return decodedChar;
}

// console.log(decodedArray.join(''));

// How many days in a month
function daysInMonth(month, leapYear = false) {
  let result;
  switch (month.toLowerCase()) {
  case 'january':
  case 'march':
  case 'may':
  case 'july':
  case 'august':
  case 'october':
  case 'december':
    result = `${month} has 31 days`;
    break;
  case 'april':
  case 'june':
  case 'september':
  case 'november':
    result = `${month} has 30 days`;
    break;
  case 'february':
    if (leapYear === true) {
      result = `${month} has 29 days`;
      break;
    } else {
      result = `${month} has 28 days`;
      break;
    }
  default:
    throw new Error('Must provide a valid month');
  }
  return result;
}

// console.log(daysInMonth('january'));
// console.log(daysInMonth('april'));
// console.log(daysInMonth('february', true));
// console.log(daysInMonth('february'));



// Rock Paper Scissors
// 1 is Rock
// 2 is Paper
// 3 is Scissors


function rps(num) {
  const randomNo = Math.floor(Math.random() * 3) + 1;

  if (num === 1) {
    if (randomNo === 1){
      return "It's a tie!";
    } else if (randomNo === 2) {
      return "Computer wins!";
    } else {
      return "You win!";
    }
  } else if (num === 2) {
    if (randomNo === 1){
      return "You win!";
    } else if (randomNo === 2) {
      return "It's a tie!";
    } else {
      return "Computer wins!";
    }
  } else if (num === 3) {
    if (randomNo === 1){
      return "Computer wins!";
    } else if (randomNo === 2) {
      return "You win!";
    } else {
      return "It's a tie!";
    }
  } else {
    throw new Error("Argument not valid");
  }
}

console.log(rps(1));
console.log(rps(2));
console.log(rps(3));







