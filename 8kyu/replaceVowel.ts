const replace = (s: string) => {
    let vowel: string[] = ['a','e','i','o','u'];
    let result: string = '';
    for(let i=0; i<s.length; i++){
        if(vowel.includes(s[i])){
            result += '!';
        }
        else{
            result += s[i];
        }
    }
return result;
}
console.log(replace('hello')); // 'h!ll!'
console.log(replace('how are you today?')); // 'h!w !r! y!! t!d!y?
console.log(replace('aeiou')); // '!!!!!'
console.log(replace('ABCDE')); // '!BCD!'