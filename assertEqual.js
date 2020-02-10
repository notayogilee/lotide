const assertEqual = function (actual, expected) {


  if (actual === expected) {
    console.log(`😄 Assertion Passed:  ${actual} === ${expected}`);
    return true;
  } else {
    console.log(`🙁 Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
};
module.exports = assertEqual;

// console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
// console.log(assertEqual(1, 1));
