function changes (str:string): string{
    let upper:string[] =[];
    let lower:string[] =[];
    for(let ch =0; ch< str.length; ch++){
        if(str[ch]=== str[ch].toUpperCase()){
            upper.push(str[ch]);
        }else if(str[ch] ===str[ch].toLowerCase()){
            lower.push(str[ch]);
        }
    }
    let sumUpper:number = upper.join('').length;
    let sumLower:number = lower.join('').length;
    if(sumUpper > sumLower){
       return str.toUpperCase();
    }
    else{
        return str.toLowerCase();
    }
}
console.log(changes("SOLve"));
console.log(changes("CODe"));
console.log(changes("COde"));
console.log(changes("Code"));