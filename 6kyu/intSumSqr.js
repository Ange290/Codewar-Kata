const intSumSq = (n,m) => { 
     let result =[];
     for( let num =1; num < n; num++){
     const sum = num.toString().split('').map(Number).reduce((a,b)=> a+b,0);
     if(sum * sum === m){
      result.push(num)
    }
     }
}