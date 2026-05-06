
function growingPlant(upSpeed: number, downSpeed: number, desiredHeight: number ): number {
 let count = 0;
  let result = 0;
    while (result < desiredHeight) {

    result += upSpeed;
    count++;

    if (result >= desiredHeight) {
      break;
    }

  
    result -= downSpeed;
  }

  return count;
}
console.log(growingPlant(100, 10, 910))
console.log(growingPlant(10, 9, 4))
console.log(growingPlant(5, 2, 10))