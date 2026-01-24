const removeEveryOther = (arr: any[]) => {
   let result = arr.filter((_, index) => index % 2 === 0);

    return result;
};
console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again'])); // ['Hello', 'Hello Again']
console.log(removeEveryOther([1, 2, 3, 4, 5, 6])); // [1, 3, 5]
console.log(removeEveryOther([[1, 2], [3, 4], [5, 6], [7, 8]])); // [[1, 2], [5, 6]]