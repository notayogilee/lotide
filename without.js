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

const without = function(source, itemsToRemove) {
  for (let i = 0; i < itemsToRemove.length; i++) {
    for (let j = 0; j < source.length; j++) {
      if (itemsToRemove[i] === source[j]) {
        source.splice(j, 1);
      }
    }
  }
  return source;
};

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]
