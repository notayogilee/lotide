const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😄 Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`🙁 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(pairs, searchItem) {
  for (let pair in pairs) {
    if (pairs[pair] === searchItem) {
      actual = pair;
      return actual;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

findKeyByValue(bestTVShowsByGenre, "The Wire");
findKeyByValue(bestTVShowsByGenre, "That '70s Show");

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
