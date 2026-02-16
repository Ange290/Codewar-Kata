export const otherAngle = (a: number, b: number): number => {
    let missingSide: number = 180- (a + b);
  return missingSide;
}
