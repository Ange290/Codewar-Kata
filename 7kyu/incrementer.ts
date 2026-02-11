export function incrementer(nums: number[]) : number[] {
     let arr: number[]=[];
    let incre : number =1;
     for(let a = 0; a< nums.length; a++){
         let value : number = nums[a] + incre;
  arr.push(value % 10);
  incre++;
     }
}