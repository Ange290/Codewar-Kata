function promiseHelloWorld() {
  const p = Promise.resolve('Hello World!');
  return p;
  
}
promiseHelloWorld().then(console.log);