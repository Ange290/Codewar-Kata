const sumDigits=(number: number)=> {
    let sum =0;
     let turnArry = Array.from(String(Math.abs(number)),Number);
     sum= turnArry.reduce((a,b)=> a+b);
        return sum;
}
console.log(sumDigits(10)); // 1
console.log(sumDigits(99));
console.log(sumDigits(-32));