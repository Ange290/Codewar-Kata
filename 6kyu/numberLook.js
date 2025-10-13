function narcissistic(value) {
  // Code me to return true or false
  let arr = value.toString().split('');
  let leng = arr.length
  let power = arr.reduce((acc,num)=> acc+ Math.pow(num,leng), 0);
  if(value === power){
    return true
  }else{
    return false
  }
 
}
console.log(narcissistic(153)); // true
console.log(narcissistic(123)); // false
console.log(narcissistic(1634));