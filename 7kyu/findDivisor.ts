 export function divisors (nums: number): number[] | string{
    let arr:number[] =[];
for(let i =2; i<= Math.sqrt(nums);i++){
    if(nums % i !==0){
        return `${nums} is prime`
    }
}
    for(let x= 2; x< nums; x++){
        if(nums % x === 0){
            arr.push(x);
        }
    }
    return arr;
}
console.log(divisors(12));