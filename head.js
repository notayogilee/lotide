const assertEqual = require('./assertEqual');

const head = function (actual) {
  return actual[0];
};


console.log(assertEqual(head([]), 7));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));