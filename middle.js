const eqArrays = function(arr1, arr2) {
  let actual = true;

  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] !== arr1[i]) {
      actual = false;
    }
  }
  return actual;
};

const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😄 Assertion Passed! This was the expected outcome! `);
  } else {
    console.log(`🙁 Assertion Failed: This was not the expected outcome!`);
  }
};

const middle = function(array) {
  middleOfArray = [];
  if (array.length % 2 === 0) {
    middleOfArray.push(array[array.length / 2]);
    middleOfArray.push(array[array.length / 2 - 1]);
  } else {
    middleOfArray.push(array[Math.floor(array.length / 2)]);
  }
  console.log(middleOfArray);
};

middle([1, 2, 31, 4, 5]);
// assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// eqArrays([1, 2, 3], [1, 2, 3]);
