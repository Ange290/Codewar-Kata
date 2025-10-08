function isHappy(n) {
  // Good Luck
  let set = new Set();
while(n !==1){
  if(set.has(n)){
    return false;
  }
  set.add(n);
  let arr = n.toString().split('');
  
  let num =arr.map((item) => item * item);
  
  let sum = num.reduce((a,b)=> a+b,0);
    n = sum;
}
return true

}
console.log(isHappy(4));