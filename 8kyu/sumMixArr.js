
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.
function sumMix(x){
  
let toNum =x.map((item)=> parseInt(item));
let sum = toNum.reduce((a,b)=> a+b);
return sum
}
console.log(sumMix([1, '2', 3, '4'])); // 10
console.log(sumMix(['1', '2', '3', '4']));