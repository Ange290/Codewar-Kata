function findOdd(A) {
  let grp = A.reduce((accumulator,currentValue)=>{
    if(!accumulator[currentValue]){
      accumulator[currentValue] = [];
    }
    accumulator[currentValue].push(currentValue)
    return accumulator;
  },{});

}
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]));
console.log(findOdd([0,1,0,1,0]));

console.log(findOdd([7]));