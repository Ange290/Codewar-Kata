function outed(meet, boss){
  let res=[];
for(let key in meet){
res.push(meet[key]);
}
let sum = res.reduce((acc,num)=> acc + num);
let final = sum / res.length
if(final <= 5){
  return 'Get Out Now!'
}else{
  return 'Nice Work Champ!'
}
  return Math.floor(final);
}
console.log(outed({'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0},'laura'));
console.log(outed({'tim':1, 'jim':3, 'randy':9, 'sandy':6, 'andy':7, 'katie':6, 'laura':9, 'saajid':9, 'alex':9, 'john':9, 'mr':8}))