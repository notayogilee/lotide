const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😄 Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`🙁 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  let results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item] === undefined) {
        results[item] = 1;
      } else {
        results[item] += 1;
      }
    }
  }
  return results;
};
