const removeEveryOther = (arr: any[]) => {
   let result = arr.filter((_, index) => index % 2 === 0);

    return result;
};