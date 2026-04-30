export function countNumber(matrix: number[][],num: number): number{
    let count = 0;
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] === num){
                count++;
            }
        }
    }
   return count;
}
