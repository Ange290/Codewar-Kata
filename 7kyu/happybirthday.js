// As you may know, once some people pass their teens, they jokingly only celebrate their 20th or 21st birthday,
//  forever. With some maths skills, that's totally possible - you only need to select the correct number base!

// For example, if they turn 32, that's exactly 20 - in base 16... Already 39? That's just 21, in base 19!

// Your task is to translate the given age to the much desired 20 (or 21) years, and indicate the number base,
//  in the format specified below.

// Note: input will be always > 21

// Examples:
// 32  -->  "32? That's just 20, in base 16!"
// 39  -->  "39? That's just 21, in base 19!"

function womensAge(n) {
  if(n <21){ return 'Invalid Input'}


  for(let base = 2; base <100; base++){
    if(n === 2 * base){
      return `${n}? That's just 20, in base ${base}!`
    }
    else if(n === 2 * base + 1){
      return `${n}? That's just 21, in base ${base}!`
    }
}
 
}
console.log(womensAge(32))
console.log(womensAge(39))
console.log(womensAge(98))