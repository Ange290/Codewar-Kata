export function partsSums(ls: number[]): number[] {
let sums: number[] = [];

  let total = ls.reduce((a, b) => a + b, 0);
  for (let i = 0; i < ls.length; i++) {
    sums.push(total);
    total -= ls[i];
  }
}