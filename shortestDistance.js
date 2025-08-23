// Given a string s and a character c, return an array of integers representing the shortest distance from the current 
// character in s to c.

// Notes
// All letters will be lowercase.
// If the string is empty, return an empty array.
// If the character is not present, return an empty array.
// Examples
// s = "lovecodewars"
// c = "e"
// result = [3, 2, 1, 0, 1, 2, 1, 0, 1, 2, 3, 4]

// s = "aaaabbbb"
// c = "b"
// result = [4, 3, 2, 1, 0, 0, 0, 0]

// s = ""
// c = "b"
// result = []

// s = "abcde"
// c = ""
// result = []

function shortesttoChar(s, c) {
  if (s === '' || c === '' || !s.toLowerCase().includes(c.toLowerCase())) {
    return [];
  }

  let str = s.toLowerCase().split('');
  let target = c.toLowerCase();

  let change = str.map(char => char === target ? '0' : char);

  let indx = [];
  change.forEach((char, i) => {
    if (char === '0') indx.push(i);
  });

  let result = change.map((_, i) => {
    let distance = indx.map(z => Math.abs(z - i));
    return Math.min(...distance);
  });

  return result;
}
