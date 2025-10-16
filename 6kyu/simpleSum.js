function solve(n) {
  let a = 0;
  let str = n.toString();
  
  for (let i = 0; i < str.length - 1; i++) {
    a = a * 10 + 9;
  }
  let b = n - a;
  const digitSum = num => num.toString().split('').reduce((s, d) => s + +d, 0);

}