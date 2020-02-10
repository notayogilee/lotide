const eqArrays = require('./eqArrays');
// const eqArrays = function (arr1, arr2) {
//   let actual = true;

//   if (arr1.length !== arr2.length) {
//     actual = false;
//   }

//   for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] !== arr1[i]) {
//       actual = false;
//     }
//   }
//   return actual;
// };

const assertArraysEqual = function (arr1, arr2, expected) {
  let actual = eqArrays(arr1, arr2);
  if (actual === expected) {

    console.log(`😄 Assertion Passed: Outcome expected `);
    return actual;
  } else {
    console.log(`🙁 Assertion Failed: Outcome not expected `);
    return actual;
  }
};

module.exports = assertArraysEqual;

// console.log(assertArraysEqual([1, 2, 3, 4], [1, 2, 3], false)); // => should PASS
