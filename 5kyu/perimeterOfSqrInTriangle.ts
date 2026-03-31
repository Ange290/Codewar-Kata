export const perimeter = (n:number):number => {
 
  let a =1;
  let b =1;
  let sum: number = a + b;

  
  for(let x =2; x <=n; x++){
  let newSum: number = a + b;
     sum +=newSum;
      a =b;
      b = newSum;
  }
  return 4*sum
}
