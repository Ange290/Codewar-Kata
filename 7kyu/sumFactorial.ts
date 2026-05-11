function sumFactorial(arr: number[]): number {

     let sum =0;
     
  for(let x = 0; x < arr.length; x++){
    let single=1;
    for(let y =2; y <= arr[x]; y++){
         single *= y; 
    }
      sum += single
  }
    return sum
}
console.log(sumFactorial([1, 2, 3]))
console.log(sumFactorial([4, 5, 6]))
console.log(sumFactorial([0, 1, 2]))