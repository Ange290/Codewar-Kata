const uniqueInOrder = function(iterable: any){
    let result: any[] = [];
    for(let i=0; i<iterable.length; i++){
        if(iterable[i] !== iterable[i+1]){
            result.push(iterable[i]);
        }
    }
    return result;
}
console.log(uniqueInOrder('AAABBCCDAABB'));
console.log(uniqueInOrder('111222333666555'));