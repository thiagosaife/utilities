const A = [5, 2, 4, 6, 1, 3, 8, 1, 10, 12, 13, 4, 7];

const insertionSort = (array) => {
  for (let j = 1; j < array.length; j++) {
    let i = j - 1;
    let key = array[j];
    while (i >= 0 && array[i] > key) {
      array[i + 1] = array[i];
      i--;
    }
    array[i + 1] = key;
  }
  return array;
}

console.log('sorted =>', insertionSort(A));

// Introduction to Algorithms, Third Edition - Cormen et. all.