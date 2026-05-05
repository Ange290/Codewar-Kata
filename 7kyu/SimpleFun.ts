
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