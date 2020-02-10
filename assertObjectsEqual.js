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
  }
  return actual;
};

const eqObjects = function (object1, object2) {
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

const assertObjectsEqual = function (object1, object2, expected) {
  const inspect = require("util").inspect;

  if (eqObjects(object1, object2)) {
    // console.log(`Example label: ${inspect(object1)}`);
    console.log(
      `😄 Assertion Passed:  ${inspect(object1)} === ${inspect(object2)}`
    );
  } else {
    console.log(
      `🙁 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`
    );
  }
};

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertObjectsEqual(cd, dc, true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertObjectsEqual(cd, cd2, false); // => false
