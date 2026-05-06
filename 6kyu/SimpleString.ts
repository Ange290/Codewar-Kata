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


}