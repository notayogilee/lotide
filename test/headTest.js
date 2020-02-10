const assertEqual = require('../assertEqual');
const head = require('../head');

console.log(assertEqual(head([]), 7));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));