function oddPrimeNumber(n) {
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
if(isPrime && i % 2 !== 0){
     result.push(i)
   }
}
let leng = result.length;
let near = result[result.length-1];


final.push(leng);
final.push(near)
   
   return final;
}