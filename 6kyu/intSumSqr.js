const intSumSq = (n,m) => { 
     let result =[];
     for( let num =1; num < n; num++){
     const sum = num.toString().split('').map(Number).reduce((a,b)=> a+b,0);
     if(sum * sum === m){
      result.push(num)
    }
     }
     return result.length > 0 ? result : "No result";
}
console.log(intSumSq(156,16));
console.log(intSumSq(100,1));
console.log(intSumSq(100,10));
console.log(intSumSq(100,100));

