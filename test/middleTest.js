const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');


middle([1, 2, 31, 4, 5]);
middle([21, 3, 31, 6]);
console.log(assertArraysEqual(middle([1, 2, 31, 4, 5]), [31], true)); // => should PASS
console.log(assertArraysEqual(middle([21, 3, 31, 6]), [3, 31], true));
// eqArrays([1, 2, 3], [1, 2, 3]);
