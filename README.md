# lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @/lotide`

**Require it:**

`const _ = require('@notayogilee/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `function head(...)`: returns the first element in an array
- `function tail(...)`: returns every element in an array except for the first element
- `function middle(...)`: returns the middle element(s) of an array
- `function map(...)`: given an array of strings, returns the first letter of each string in a new array of strings
- `function letterPositions(...)`: given a string, returns an object of letters as keys and their coresponding
- `function flatten(...)`: given an array of arrays with numbers, returns one array with the same numbers
- `function findKeyByValue(...)`: given an object and value, returns the corresponding key
- `function findKey(...)`: given an object of strings for keys and objects for values and one of the value objects, return corresponding key
- `function countOnly(...)`: given a string returns how many instances of the string occurs
- `function countLetters(...)`: given a string of letters, returns an object with key as letter found in string and value as number of times found
- `function takeUntil(...)`: given an array and a limiting factor, returns array until limiting factor is found
- `function without(...)`: given an array of elements and an array of element to remove from first array, returns modified array
