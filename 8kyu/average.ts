
export function findAverage(array: number[]): number {
 
  if(array.length === 0)return 0;
 let sum :number = array.reduce((a,b) => a +b);

  return Math.floor(sum/array.length);
}
console.log(findAverage([1,1,1]))
console.log(findAverage([12,4,6,2,5]))



