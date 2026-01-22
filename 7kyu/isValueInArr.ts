const arrCheck = (value: any) => {
    for (let i = 0; i < value.length; i++) {
          if (!Array.isArray(value[i])) {
            return false;
        }
    }
    return true;
}
console.log(arrCheck([[1], [2], [3]])); // true
console.log(arrCheck([[1, 2], [3, 4], [5, 6]])); // true    
console.log(arrCheck([1, 2, 3])); // false
console.log(arrCheck([[1, 2], [3, 4], 5])); // false