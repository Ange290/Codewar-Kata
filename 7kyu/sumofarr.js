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