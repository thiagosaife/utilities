class Utilities {
  sortArray(array, fields) {
    if (Array.isArray(fields)) {
      array.sort((a, b) => {
        let i = 0;
        while (i < fields.length) {
          a = a[fields[i]];
          b = b[fields[i]];
          i += 1;
        }
        if (a > b) return 1;
        if (b > a) return -1;
        return 0;
      });
    }
    if (!Array.isArray(fields)) {
      return array.sort((a, b) => {
        if (a[fields] < b[fields]) return -1;
        if (a[fields] > b[fields]) return 1;
        return 0;
      });
    }
    return array.sort((a, b) => {
      if (a > b) return 1;
      if (b > a) return -1;
      return 0;
    });
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
}

export default Utilities;