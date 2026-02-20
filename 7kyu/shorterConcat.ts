const shorterReverseLonger=(a:string, b:string) =>{
      let ac:number = a.length;
  let bc:number = b.length;
  let result;

    if (bc < ac) {
    let am = a.split('').reverse().join('');
    result = `${b}${am}${b}`;
  }
   else if (bc === ac) {
    let am = a.split('').reverse().join('');
    result = `${b}${am}${b}`;
  }
}