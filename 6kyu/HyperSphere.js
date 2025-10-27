function isSphere(coords,radius){
    if(!coords) return true
      if(radius == null) return true
       let r = Math.pow(radius,2);
       let check = coords.map((index)=>index == undefined ? 0: Math.pow(index,2))
  let sum = check.reduce((acc,num)=> acc + num,0)

}