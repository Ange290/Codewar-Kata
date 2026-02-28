const checkExam = (array1: any, array2: any) => {
    let sum = 0;
    for(let i =0; i< array1.length; i++){
  let answer = array1[i];
  let student = array2[i];

   if(answer === "" || student === "") {
     sum += 0;//blank atleast in one element
    }
}