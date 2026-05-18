function XO(str) {
    str=str.toLowerCase();
  let xCount= 0;
  let oCount= 0;

  for(let char of str){
     if( char === 'x'){
        
      xCount++;
     }

       else if(char === 'o'){
       oCount++;
       }
    }
      return xCount === oCount
}
console.log(XO('xo'))
console.log(XO('xxOo'))
console.log(XO('xxxm'))
console.log(XO('Oo'))
console.log(XO('ooom'))