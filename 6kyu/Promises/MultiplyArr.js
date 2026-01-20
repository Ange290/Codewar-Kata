
async function processArray(array){
  for( let a of array){
    await someAsyncFunction(a);
    
  }
}
const someAsyncFunction = async(item)=>{
  return new Promise((resolve,reject) =>{
    setTimeout(() =>{
      console.log(item * 2)
      resolve()
    }, 1000);
  })
}
console.log(processArray( [1, 2, 3, 4, 5]));
