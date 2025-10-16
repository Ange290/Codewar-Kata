function solve(n) {
  let a = 0;
  let str = n.toString();
  
  for (let i = 0; i < str.length - 1; i++) {
    a = a * 10 + 9;
  }
  let b = n - a;
  const digitSum = num => num.toString().split('').reduce((s, d) => s + +d, 0);

  return digitSum(a) + digitSum(b);
}
console.log(solve(29));     // ➜ 11
console.log(solve(328));    // ➜ 22
console.log(solve(1000));   // ➜ 28
console.log(solve(99));     // ➜ 18