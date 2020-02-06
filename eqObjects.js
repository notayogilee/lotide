const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😄 Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`🙁 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2, expected) {
  let actual = true;
  if (arr1.length !== arr2.length) {
    actual = false;
  } else {
    for (let i = 0; i < arr2.length; i++) {
      if (arr2[i] !== arr1[i]) {
        actual = false;
      }
    }
  }
  return actual;
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let key in object1) {
      if (Array.isArray(object1[key])) {
        console.log(eqArrays(object1[key], object2[key]));
        return eqArrays(object1[key], object2[key]);
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }
};

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true
// // eqObjects(cd, dc); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false
