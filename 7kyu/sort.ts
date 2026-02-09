export function solution(nums: number[]): number[] {
  return nums.sort((a,b)=> a-b); // your code here
}
console.log(solution([1, 2, 10, 50, 5]));