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

const flatten = function(array) {
  newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        newArray.push(array[i][j]);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  console.log(newArray);
};

flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
flatten([1, 3, [3, 7], 5, [1]]); // => [1, 2, 3, 4, 5, 6]
