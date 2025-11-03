String.prototype.camelCase=function(){
  let arr =this.split(' ');
    if(this.trim() === ""){
    return "";
  }
  else{
  let result =[];
  for(let x = 0; x < arr.length; x++){
    let word = arr[x]
    result.push(word[0].toUpperCase() + word.slice(1));
  }
}
  return result.join('');
}