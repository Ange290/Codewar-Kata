function stringExpansion(s: string): string {

  let num = 1;
  let result ="";
for(let char of s){
  if(!isNaN(Number(char))){
    num = Number(char)
  }else{
    result += char.repeat(num)
  }
}

  return result

}
console.log(stringExpansion('3D2a5d2f'))
console.log(stringExpansion('3abc'))
console.log(stringExpansion('0d0a0v0s'))