
export function menFromBoys(arr: number[]): number[] {
  let even = arr.filter((index)=> index % 2 === 0);
  let odd = arr.filter((indx)=> indx % 2 !== 0);
  let sortEven =[... new Set(even)].sort((a,b)=> a - b);
  let sortOdd = [... new Set(odd)].sort((a,b)=> b - a);
  let result = [...sortEven, ...sortOdd]
  return result;
}
console.log(menFromBoys([2, 43, 95, 90, 37]));
console.log(menFromBoys([82, 91, 72, 76, 76, 100, 85]))