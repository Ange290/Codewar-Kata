function multiplicationTable(size: number): number[][] {

     let table= [];
 for(let a=1; a<=size;a++){
    let row =[];
     for(let b=1; b<=size; b++){
      row.push(a*b);
    }
     table.push(row);
 }

}