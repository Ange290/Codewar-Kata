// Description:
// Another Kata testing whether all elements of an array are square numbers, although this time the array can be a multidimensional array with any number of dimensions.

// Your task - Write a function that checks whether all elements in a multidimensional array are square numbers. The function should be able to take any number of array elements and any number of dimensions.

// Your function should return true if all elements are square numbers and false if not.

// An entirely empty array should return undefined/NULL depending on the language you are completing this Kata in.

// You can assume that all array elements will be positive integers.



var isSquare = function(arr){
if(arr.length === 0) return undefined;
let removeSub = arr.flat(Infinity);
let sqrt = removeSub.map(item => Math.floor(Math.sqrt(item)));
for(let y=0; y< removeSub.length; y++){
  let squared = false;
 for(let x=0; x< sqrt.length; x++){
 
  if(sqrt[x] * sqrt[x] === removeSub[y] ){
    squared=true;
    break;
  }

  }
  if(!squared){
    return false;
  }
}
return true
}
console.log(isSquare([1, 4, 9, 16])); // true
console.log(isSquare([1, 2, 3, 4])); // false
console.log(isSquare([])); // undefined