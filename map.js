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

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);

console.log(results1);
assertArraysEqual(
  map(words, word => word[0]),
  ["g", "c", "t", "m", "t"],
  true
);
