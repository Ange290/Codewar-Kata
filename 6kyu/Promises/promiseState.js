const pro2 = new Promise(res => setTimeout(res, 2000));
const pro =Promise.reject("Promise Rejected ");

const pro1 =  Promise.resolve("Promise resolved");
 async function getState(promise) {
      const top ={};
    return Promise.race([promise,top])
    .then(v =>( v===top ? "pending" : "fulfilled"))
    .catch(() => "rejected");
  
}
getState(pro).then(console.log);
getState(pro1).then(console.log);
getState(pro2).then(console.log);