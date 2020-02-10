

const eqArrays = function (arr1, arr2, expected) {
  let actual = true;

  if (arr1.length !== arr2.length) {
    actual = false;
  } else {
    for (let i = 0; i < arr2.length; i++) {
      if (arr2[i] !== arr1[i]) {
        actual = false;
      }
    }
    return actual;
    // console.log(actual);
  }
};
module.exports = eqArrays;

// eqArrays([1, 2, 3], [1, 2, 3]); // => true
// eqArrays([1, 2, 3], [3, 2, 1]); // => false

// eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false
