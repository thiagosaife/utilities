# utilities
Utilities JavaScript ES+ Class with functions to aid development. New utilities would lie in here.

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

## Or a simple array
```
const fruits = ['orange', 'apple', 'lemon', 'pinneapple'];
const sortedArray = utils.sortArray(fruits);
```

Enjoy!!!
