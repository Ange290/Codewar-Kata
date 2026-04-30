export function countNumber(matrix: number[],num: number): number{
    let count = 0;
    for(let i = 0; i < matrix.length; i++){
        if(matrix[i] === num){
            count++;
        }
    }
   return count;
}
