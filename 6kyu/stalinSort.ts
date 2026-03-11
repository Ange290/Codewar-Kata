export function stalinSort(array: number[]): void {
    if(array.length === 0) return;
    let currentIndex:number = array[0];
 for(let x =0; x < array.length;){
    if(array[x] >= currentIndex){
    currentIndex = array[0];
    x++;
    }
 }
}
stalinSort([5, 3, 1, 2, 4])