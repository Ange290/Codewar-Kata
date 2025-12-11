function lettersToNumbers(sentence) {
  let total = 0;

  for (let char of sentence) {
    if (char >= 'a' && char <= 'z') {
    
      total += char.charCodeAt(0) - 96;
    } 
    else if (char >= 'A' && char <= 'Z') {
   
      total += (char.charCodeAt(0) - 64) * 2;
    }
    else if (char >= '0' && char <= '9') {
  
      total += Number(char);
    }
    else {
     
      total += 0;
    }
  }

  return total;
}

// Example usage:
console.log(lettersToNumbers("Hello World! 123")); // Output: 170
console.log(lettersToNumbers("abcXYZ")); // Output: 78
console.log(lettersToNumbers("12345"));