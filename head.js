
  const head = function(actual) {
    return actual[0];
  };
  
  const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`😄 Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`🙁 Assertion Failed: ${actual} !== ${expected}`);
  }
};



assertEqual(head([]), 7);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");