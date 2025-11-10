var midpointSum = function (n) {
if (n.length < 3) return undefined;

  for (let i = 1; i < n.length - 1; i++) {
       const leftSum = n.slice(0, i).reduce((a, b) => a + b, 0);
    const rightSum = n.slice(i + 1).reduce((a, b) => a + b, 0);
 if (leftSum === rightSum) {
      return i; 
    }
  }
}