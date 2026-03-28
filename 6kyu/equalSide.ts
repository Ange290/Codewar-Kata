const findEvenIndex =(arr:number[])=>{
    let totalSum= arr.reduce((acc,num)=>acc+num,0);
     let leftSum =0;
    for(let i=0; i<arr.length; i++){
        let rightSum = totalSum - leftSum - arr[i];
        if(leftSum === rightSum) return i;
        leftSum += arr[i];
    }
    return -1
}
console.log(findEvenIndex([1,2,3,4,3,2,1]));
console.log(findEvenIndex([1,100,50,-51,1,1]));
console.log(findEvenIndex([1,2,3,4,5,6]));