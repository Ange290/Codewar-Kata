function findMissingLetter(array: string[]): any {

       for (let i = 0; i < array.length - 1; i++) {
        const currentCode = array[i].charCodeAt(0);
        const nextCode = array[i + 1].charCodeAt(0);

          if (nextCode - currentCode > 1) {
            return String.fromCharCode(currentCode + 1);
        }
       }
       return null;
}
console.log(findMissingLetter(['a','b','c','d','f']))
console.log(findMissingLetter(['O','Q','R','S']))
console.log(findMissingLetter(['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y']))