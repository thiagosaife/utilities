# utilities
Utilities JavaScript ES6+ Class with functions to aid development. New utilities will lie in this class.

## Import or require.
```
import Utilities from 'Utilities';
```

## Instantiate the class like this:
```
const utils = new Utilities()
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

## You can now sort an array of objects by their nested properties, like this:
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

## Shuffle the array's items
```
const fruits = ['orange', 'apple', 'lemon', 'pinneapple'];
const shuffled = utils.shuffleItems(fruits);
```

## Reduce an array of objects to one containing just the object's desired keys
This function reduces an array of objects, keeping just the keys specified as an a array, in the keysToKeep parameter.
```
const keysToKeep = ['doors', 'tires', 'engine'];
const cars = [
  {
    model: 'Golf',
    tires: 'Continental',
    engine: 'VW model',
    doors: 5,
    gearBox: 'auto',
  },
  {
    model: 'Argo',
    tires: 'Goodyear',
    engine: 'Fiat',
    doors: 5,
    gearBox: 'auto',
  },
  {
    model: 'Fusca',
    tires: 'Pirelli',
    engine: 'VW',
    doors: 3,
    gearBox: 'manual',
  },
];
const reduced = utils.reduceArrayKeys(fruits);
// => [
  {
    {
    tires: 'Continental',
    engine: 'VW model',
    doors: 5,
  },
  {
    tires: 'Goodyear',
    engine: 'Fiat',
    doors: 5,
  },
  {
    tires: 'Pirelli',
    engine: 'VW',
    doors: 3,
  },
  }
]
```

Enjoy!!!
