class Utilities {
  sortArray(array, field) {
    if (field) {
      return array.sort((a, b) => {
        if (a[field] < b[field]) return -1;
        if (a[field] > b[field]) return 1;
        return 0;
      });
    }
    return array.sort((a, b) => {
      if (a > b) return 1;
      if (b > a) return -1;
      return 0;
    });
  }
}

export default Utilities;