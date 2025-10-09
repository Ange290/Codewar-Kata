function calculate(string) {
  let arr = string.split(' ');
  let result =[];
  let sum =0;
  for(let i=0; i<arr.length; i++){
    if(!isNaN(arr[i+1])){
      result.push(Number(arr[i+1]));
    
    
if(arr[i]=== 'loses'){
  let loss = result.reduce((a,b)=> a - b);
  return loss
  
}
else  if(arr[i] === 'gains'){
  let gain = result.reduce((a,b)=> a+b,0);
    return gain;
}
  
  }
  }
return result;
  
}
console.log(calculate("Jerry has 34 apples and gains 6"));