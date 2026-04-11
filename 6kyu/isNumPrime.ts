function isPrime(num: any) {
    if (num<=1){
        return false;
    }
    for(let i=2; i<=Math.sqrt(num); i++){}
}