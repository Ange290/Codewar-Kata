function duplicateEncoder(word){
word = word.toLowerCase();
let result ='';
for(let c= 0; c< word.length; c++){
    if(word.indexOf(word[c]) !== word.lastIndexOf(word[c])){
result += ')';
    }else{
        result += '(';
    }
}
return result;
}
console.log(duplicateEncoder('din'));
console.log(duplicateEncoder('redece'));
console.log(duplicateEncoder('Success'));