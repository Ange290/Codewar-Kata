function oddDigits(num){
    return String(num).split('').every(d => d % 2 !== 0);
}

function onlyOddDigPrimes(n) {
     let result =[];
  let final =[]
  
  for(let i =2; i<=n; i++){
  let isPrime = true;
   for(let a =2; a<= Math.sqrt(i); a++){
   if(i % a === 0){ 
      isPrime = false
      break;
   }
   
}
if(isPrime && i % 2 !== 0 && oddDigits(i)){
     result.push(i)
   }
}
let leng = result.length;
let near = result[result.length-1];
let next = n + 1;

while (true) {
    if (next % 2 === 0) {
        next++;
        continue;
    }

    let isPrime = true;

    for (let j = 3; j <= Math.sqrt(next); j += 2) {
        if (next % j === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime && oddDigits(next)) {
        break;
    }

    next++;
}

final.push(leng);
final.push(near);
final.push(next)
   
   return final;
}
console.log(onlyOddDigPrimes(20))
console.log(onlyOddDigPrimes(40)) // [4, 9]