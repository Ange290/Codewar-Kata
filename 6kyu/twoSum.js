function twoSum(numbers, target) {
  let indx =[];
  for(let x=0; x<numbers.length; x++){
    for(let y= x+1; y<numbers.length; y++){
        if(numbers[x] + numbers[y] === target){
            indx.push(x);
            indx.push(y);
        }
    }
    }
   return indx;

}
console.log(twoSum([1,2,3],4))
console.log(twoSum([1234,5678,9012],14690))