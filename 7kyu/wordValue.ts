
export function wordValue(arr: string[]): number[] {
  return arr.map((word, index) => {
    let sum = 0;
    for (let char of word) {
      if (char !== " ") {
        sum += char.charCodeAt(0) - 96;
      }
    }

    return sum * (index + 1);

  });
}
