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
      let hashtag = "#" +res.join('');
    if(hashtag.length > 140)return false;
    return hashtag
}
console.log(generateHashtag("")); // false
console.log(generateHashtag(" ".repeat(200)));
console.log(generateHashtag("Do We have A Hashtag")); // "#DoWeHaveAHashtag"
console.log(generateHashtag("Codewars Is Nice")); // "#CodewarsIsNice"