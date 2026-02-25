const remove = (string: string) => { 
    while(string.endsWith('!')){
  string = string.slice(0,-1);
}
return string;
 }
 console.log(remove('Hi!')); // 'Hi'
 console.log(remove('Hi!!!'));
    console.log(remove('!Hi')); // '!Hi'
    console.log(remove('!Hi!')); // '!Hi'