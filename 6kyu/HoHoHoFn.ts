
function ho(str?:string):string {
if(!str) return 'Ho!';
  return str.slice(0,-1) + ' Ho' + '!';
}
console.log(ho());
console.log(ho(ho(ho())))
