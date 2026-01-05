async function sayJoke(apiUrl, jokeId){

        
   
  let response = await fetch(apiUrl);
 let res = await response.json();
 if(!res || !Array.isArray(res.jokes)){
    throw new Error(`No jokes at url: ${apiUrl}`);
 }
   const joke = res.jokes.find(j => j.id === jokeId);
   if(!joke){
    throw new Error(`No jokes found id: ${jokeId}`)
   }
   return {
    saySetup(){return joke.setup;},
    sayPunchLine(){ return joke.punchLine;}
   }
}
async function main(){
console.log(await sayJoke(`http://great.jokes/christmas`, 123))
}
main();