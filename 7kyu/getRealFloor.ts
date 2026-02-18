export function getRealFloor(n: number){
if(n <= 0){
    return n;
}
if(n <= 13){
  return n-1;  
}
return n -2;
}
console.log(getRealFloor(12));
console.log(getRealFloor(-4));
console.log(getRealFloor(18));