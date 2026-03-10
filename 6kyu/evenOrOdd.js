function evenOrOdd(n) {
  return n % 2 === 0 ? "Even" : "Odd";
}

for (let i = 0; i < 1000; i++) {
  evenOrOdd[i] = i % 2 === 0 ? "Even" : "Odd";
}
for (let i = 0; i > -1000; i--) {
  evenOrOdd[i] = i % 2 === 0 ? "Even" : "Odd";
}

console.log(evenOrOdd(2)); //'Even'
console.log(evenOrOdd[2]); //'Even'
console.log(evenOrOdd(7)); //'Odd'
console.log(evenOrOdd[7]); //'Odd'

//Way to handle all number negative or positive regular number or array 
const evenOrOdd = new Proxy(
  function (n) {
   
    return n % 2 === 0 ? "Even" : "Odd";
  },
  {
    get(target, prop) {
     
      const num = Number(prop);
      if (!isNaN(num)) {
        return num % 2 === 0 ? "Even" : "Odd";
      }
      return target[prop];
    },
  }
);


console.log(evenOrOdd(2));          // Even
console.log(evenOrOdd[2]);          // Even
console.log(evenOrOdd(7));          // Odd
console.log(evenOrOdd[7]);          // Odd
console.log(evenOrOdd[-44]);        // Even
console.log(evenOrOdd[-1416990353165065]); // Odd
console.log(evenOrOdd[1781651586945717]);  // Odd
console.log(evenOrOdd[-1158994119452252]); // Even