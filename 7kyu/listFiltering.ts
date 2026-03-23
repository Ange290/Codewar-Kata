export function filter_list(l:Array<any>):Array<number> {
  // Return a new array with the strings filtered out
     let result:number[] =[];
    for(let a = 0; a < l.length; a++){
        if(typeof l[a] == 'number'){
          result.push(l[a])  
        }
    }
    return result;
}
console.log(filter_list([1,2,'a','b']));
console.log(filter_list([1,'a','b',0,15]))
