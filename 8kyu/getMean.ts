
export function getAverage(marks:number[]):number{
  let sum: number = 0;
  for(let x=0; x < marks.length;x++){
    sum += marks[x]
  }
  
  let average : number = sum / marks.length
  return Math.floor(average);
}
console.log(getAverage([2,3,4,5,6]));
