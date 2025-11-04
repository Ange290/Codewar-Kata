function repeats(arr){
let duplicate =[];
let map={};
let nonDuplicate =[];
for(let num of arr){
    map[num] = (map[num] || 0) + 1;
}
for(let num in map){
    if(map[num] <=1){
        nonDuplicate.push(Number(num))
    }
}
let sum = nonDuplicate.reduce((acc,num)=> acc + num)
  return sum;
}
console.log(repeats([4,5,7,5,4,8])); //15
console.log(repeats([9,10,19,13,19,13])); //19
console.log(repeats([16,0,11,4,8,16,0,11]));
