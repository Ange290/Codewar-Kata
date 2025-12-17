function sumUpNumbers(arr) {

let sum =0;
let us = /^\d{1,3}(,\d{3})*(\.\d+)?$/;
let uk = /^\d{1,3}(\.\d{3})*(,\d+)?$/;

for(let x =0; x< arr.length; x++){
    let value = arr[x];
   if(us.test(value)){
      
   sum += Number(value.replace(/,/g,''));    
} 
}

}