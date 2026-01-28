function beggars(values, n){
let arr= new Array(n).fill(0);
 
   for(let v=0; v<values.length; v++){
    arr[v%n] += values[v];
    } 
    return arr   
  }
  console.log(beggars([1,2,3,4,5],3));