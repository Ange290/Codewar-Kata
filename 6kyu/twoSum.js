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
}