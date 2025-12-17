function sumUpNumbers(arr) {

let sum =0;
let us = /^\d{1,3}(,\d{3})*(\.\d+)?$/;
let uk = /^\d{1,3}(\.\d{3})*(,\d+)?$/;

for(let x =0; x< arr.length; x++){
    let value = arr[x];
   if(us.test(value)){
      
   sum += Number(value.replace(/,/g,''));    
} 
else if(uk.test(value)){
   sum += Number(value.replace(/\./g,'').replace(',','.'));
}
}
return sum.toLocaleString("en-US",{
    minimumFractionDigits:2,
    maximumFractionDigits:2
})
}

console.log(sumUpNumbers(["1,234.56", "2,345.67", "3.456,78", "4.567,89"])); // "11,604.90"
console.log(sumUpNumbers(["12,345.67", "23.456,78", "34,567.89"])); // "70,370.34"
console.log(sumUpNumbers(["1.234,56", "2.345,67", "3,456.78", "4,567.89"])); // "11,604.90"
