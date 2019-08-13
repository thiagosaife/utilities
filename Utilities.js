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
}

export default Utilities;