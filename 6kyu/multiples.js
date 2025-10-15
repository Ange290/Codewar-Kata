function solution(number){
  let res =[];
  for(let i = 0; i< number; i++){
    if(i % 3===0 || i%5===0){
      res.push(i)
    }
  }
  return res.reduce((acc,num)=> acc + num,0);
}
console.log(solution(10)); // 23
console.log(solution(20)); // 78