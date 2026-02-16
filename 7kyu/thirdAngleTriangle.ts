export const otherAngle = (a: number, b: number): number => {
    let missingSide: number = 180- (a + b);
  return missingSide;
}
console.log(otherAngle(30,60));
console.log(otherAngle(60,60));
