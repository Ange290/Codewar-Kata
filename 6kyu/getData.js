
// Write a JavaScript function that fetches data from an API and retries the request a specified number of times if it fails
async function getData(url,times){
   
    let response = await fetch(url);
    let result = await response.json();
    
    // for(let i=0; i<=times; i++){
         
        if(response.ok){
      
        return result;      
    // }
     }else{
        return `not not`
     }
  
}
async function main() {
      console.log(await getData(`https://jsonholder.typicode.com/post`));
}
   
main();
