export function adjacentElementsProduct(arr: number[]): number {

  let hold:number[] =[];
  for(let x =0; x< arr.length; x++){
      let check = arr[x] * arr[x+1]
        hold.push(check);
  }
  hold.pop()
  let max: number = Math.max(...hold)
  return max;

}
