var midpointSum = function (n) {
if (n.length < 3) return undefined;

  for (let i = 1; i < n.length - 1; i++) {
       const leftSum = n.slice(0, i).reduce((a, b) => a + b, 0);
    const rightSum = n.slice(i + 1).reduce((a, b) => a + b, 0);
 if (leftSum === rightSum) {
      return i; 
    }
  }
   return undefined; 
}
// Example usage:
console.log(midpointSum([1, 2, 3, 4, 5]));
console.log(midpointSum([1, 2, 3, 4, 5, 6]));
console.log(midpointSum([1, 2, 3, 4, 5, 6, 7]));
console.log(midpointSum([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(midpointSum([1, 2, 3]));