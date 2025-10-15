function inArray(array1,array2){
  let result =new Set();
  
let arr1 = array1.join(',');
for(let x = 0; x < array1.length; x++){
  let elem1 = array1[x];
  for(let y = 0; y < array2.length; y++){
    let elem2 = array2[y]
 if(typeof elem1 === 'string' && typeof elem2 === 'string'  && elem2.includes(elem1)){
   result.add(elem1); 
 }
 
 }
}

  return Array.from(result).sort((a,b)=> a.localeCompare(b));
}
console.log(inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"])); // ["arp", "live"]
console.log(inArray(["tarp", "mice", "bull"], ["lively", "alive", "harp", "sharp", "armstrong"])); // []