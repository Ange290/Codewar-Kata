function validBraces(braces:string):boolean{
    const stack:string[] = [];
    const pairs:{[key: string]: string} = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
     for(let char of braces){
         if(pairs[char]){
              stack.push(char);
         }else{
              const last = stack.pop();
               if(!last || pairs[last] !== char){
                return false;
            }
     }
         return stack.length === 0;
}
