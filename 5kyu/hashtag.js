function generateHashtag (str) {
    let res =[];
     if(str.trim() === "") {
     return false
     }else{
  let arr = str.trim().split(' ');
  for(let y = 0; y < arr.length; y++){
    let word = arr[y];
    if(word){
    res.push(word[0].toUpperCase() + word.slice(1))
  
    }
     }
}