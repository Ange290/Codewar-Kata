function duplicateCount(text){
  
  let arr = text.toLowerCase().split('');
  let unique = [... new Set(arr)];
  let duplicate =0;
  for(let x=0; x< unique.length; x++){
    let count = 0;
    for(let y = 0; y< arr.length; y++){
      if(unique[x] == arr[y]){
        count +=1;
      }
    }
    
    if(count >1){
      duplicate +=1;
    }
  }
  
  return duplicate
}
console.log(duplicateCount("aaaabbssdcacew"));
//output is 4
