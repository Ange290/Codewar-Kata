export function incrementer(nums: number[]) : number[] {
     let arr: number[]=[];
    let incre : number =1;
     for(let a = 0; a< nums.length; a++){
         let value : number = nums[a] + incre;
  arr.push(value % 10);
  incre++;
     }
     return arr;
}
console.log(incrementer([1,2,3]));
console.log(incrementer([4,6,7,1,3]));
console.log(incrementer([3,6,9,8,9]));