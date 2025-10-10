function lastDigit(n, m) {  
  
  if(n === 0n) return 1n;
  let result  = 1n;
  let base = n % 10n;
  for(let i=0n; i<m; i++){
    result = (result * base) % 10n;
  }
  return result;
}
console.log(lastDigit(1606938044258990275541962092341162602522202993782792835301376n, 2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376n));
console.log(lastDigit(4n,2n));