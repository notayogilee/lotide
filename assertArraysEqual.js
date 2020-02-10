const eqArrays = function (arr1, arr2) {
  let actual = true;

  if (arr1.length !== arr2.length) {
    actual = false;
  }

  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] !== arr1[i]) {
      actual = false;
    }
  }
  return actual;
};

const assertArraysEqual = function (arr1, arr2, expected) {
  if (eqArrays(arr1, arr2) === expected) {


    return `😄 Assertion Passed: Outcome expected `;
  } else {
    return `🙁 Assertion Failed: Outcome not expected `;
  }
};

console.log(assertArraysEqual([1, 2, 3, 4], [1, 2, 3], false)); // => should PASS
