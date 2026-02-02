function sumOfDigits(n){
    let sum = n;
    while(sum > 9){
        let digits = String(sum).split('').map(Number);
        sum = digits.reduce((acc,num)=> acc + num, 0);
    }
    return sum
}
console.log(sumOfDigits(12));
console.log(sumOfDigits(1234));
console.log(sumOfDigits(928372));