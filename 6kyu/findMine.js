const findLocation =(field)=>{
   for(let count = 0; count <field.length; count++){
  for(let x =0; x< field.length; x++){
       if(field[count][x] === 1){
      return[count,x]
    }
  }
   }
}

console.log(mineLocation([ [1, 0, 0], [0, 0, 0], [0, 0, 0] ]))// [0, 0]))
console.log(mineLocation([ [0, 0, 0], [0, 1, 0], [0, 0, 0] ])) // [1, 1]))
