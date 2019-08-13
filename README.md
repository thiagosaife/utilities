# utilities
Utilities JavaScript ES6+ Class with functions to aid development. New utilities would lie in here.

## Import or require.
```
import Utilities from 'Utilities';
```

## Instantiate the class like this:
```
const utils = new Utilities() // true to mask or empty to unmask
```

## Sort an Array of Objects like this:
```
const animals = [
 {
  name: 'Murdock',
  type: 'dog',
 },
 {
  name: 'Riggs',
  type: 'cat',
 },
];
const sortedArray = utils.sortArray(animals, 'name');
```

## Now you can sort an array of objects by their nested properties, like this:
```
const animals = [
 {
  name: 'Murdock',
  type: 'dog',
  address: {
   street: 'Rue Morgue',
   number: 1234,
  },
 },
 {
  name: 'Riggs',
  type: 'cat',
  address: {
   street: 'Elm Street',
   number: 899,
  },
 },
];
const sortedArray = utils.sortArray(animals, ['address', 'number']);
```

## Or a simple array
```
const fruits = ['orange', 'apple', 'lemon', 'pinneapple'];
const sortedArray = utils.sortArray(fruits);
```

Enjoy!!!
