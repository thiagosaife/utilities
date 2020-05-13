class Utilities {
  sortArray(array, fields) {
    if (Array.isArray(fields)) {
      return array.sort((a, b) => {
        let i = 0;
        while (i < fields.length) {
          a = a[fields[i]];
          b = b[fields[i]];
          i += 1;
        }
        return a.toLowerCase().localeCompare(b.toLowerCase());
      });
    }
    if (!Array.isArray(fields)) {
      return array.sort((a, b) => a[fields].toLowerCase().localeCompare(b[fields].toLowerCase()));
    }
    return array.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  }
  shuffleItems(array) {
    const shuffled = array;
    let currentIndex = shuffled.length;
    let temporaryValue;
    let randomIndex;
    while (currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = shuffled[currentIndex];
      shuffled[currentIndex] = shuffled[randomIndex];
      shuffled[randomIndex] = temporaryValue;
    }
    return shuffled;
  }
  reduceArrayKeys(originalArray, keysToKeep) {
    // keysToKeep: Array with keys to keep in original array
    return originalArray.map((item) => keysToKeep
      .reduce((acc, key) => {
        acc[key] = item[key];
        return acc;
      }, {}));
  }
  insertionSort(array){
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
}

export default Utilities;