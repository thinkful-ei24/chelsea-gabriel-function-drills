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

console.log('positive');
beyond(1);
console.log('negative');
beyond(-1);
console.log('infinity');
beyond(Infinity);
console.log('0');
beyond(0);
console.log('negative infinity');
beyond(Number.NEGATIVE_INFINITY);
