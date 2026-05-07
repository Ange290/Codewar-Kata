function numberOfFolds(n:number):number {
   let start = 1
  let num = 0;
  while(start  < n)
    {
      start *= 2;
      num ++;
      }

return num
}