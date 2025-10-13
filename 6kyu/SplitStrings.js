function solution(str){
  if(str === "") return [];
  let arr = str.match(/.{1,2}/g);
  if(arr.length && arr[arr.length -1].length === 1){
   arr[arr.length - 1] += '_';
  }
  return arr;
   
}
console.log(solution("abc")); // ["ab", "c_"]
console.log(solution("abcdef")); // ["ab", "cd", "ef"]