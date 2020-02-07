const eqArrays = function(arr1, arr2) {
  let actual = true;

  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] !== arr1[i]) {
      actual = false;
    }
  }
  return actual;
};

const assertArraysEqual = function(arr1, arr2, expected) {
  if (eqArrays(arr1, arr2)) {
    console.log(`😄 Assertion Passed:  ${arr1} === ${arr2}`);
  } else {
    console.log(`🙁 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const middle = function(array) {
  middleOfArray = [];
  if (array.length % 2 === 0) {
    middleOfArray.push(array[array.length / 2 - 1]);
    middleOfArray.push(array[array.length / 2]);
  } else {
    middleOfArray.push(array[Math.floor(array.length / 2)]);
  }
  return middleOfArray;
};

middle([1, 2, 31, 4, 5]);
middle([21, 3, 31, 6]);
assertArraysEqual(middle([1, 2, 31, 4, 5]), [31], true); // => should PASS
assertArraysEqual(middle([21, 3, 31, 6]), [3, 31], true);
// eqArrays([1, 2, 3], [1, 2, 3]);
