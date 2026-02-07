const calculator =(a:number,b:number,sign:string)=>{
let operator: string[] =['+','-','*','/']
if(operator.includes(sign)){
    switch(sign){
        case '+':
            return a+b;
         case '-':
            return a-b;
        case '*':
            return a*b;
        case '/':
            return a/b;
            default:
            return 'unknown value';
    }
}
return 'unknown value';
}
console.log(calculator(1, 2, '+')); // 3
console.log(calculator(1, 2, '-'));
console.log(calculator(1, 2, '*'));
console.log(calculator(1, 2, '/'));
console.log(calculator(1, 2, '%')); // 'unknown value'