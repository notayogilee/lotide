const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😄 Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`🙁 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2, expected) {
  let actual = true;

  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] !== arr1[i]) {
      actual = false;
    }
  }
  return actual;
};
