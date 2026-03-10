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