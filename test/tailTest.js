const assertEqual = require('../assertEqual');
const tail = require('../tail');

console.log(tail([5, 6, 4, 3, 8]));

//test cases
// assertEqual(tail([5,6,7]), [6,7]); //returns falsy false
// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"