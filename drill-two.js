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

const codeString = "craft block argon meter bells brown croon droop";
const codedStringArray = codeString.split(" ");
const decodedArray = [];

for (let i = 0; i < codedStringArray.length; i++) {
   decodedArray.push(decode(codedStringArray[i]));
}

function decode(word){
let decodedChar = "";

    if (word.startsWith("a")){
        decodedChar = word.substr(1,1);
    } else if (word.startsWith("b")) {
        decodedChar = word.substr(2,1);
    } else if (word.startsWith("c")) {
        decodedChar = word.substr(3,1);
    } else if (word.startsWith("d")) {
        decodedChar = word.substr(4,1);
    } else {
        decodedChar = " ";
    }

    return decodedChar;

}

console.log(decodedArray.join(""));
