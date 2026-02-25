const remove = (string: string) => { 
    while(string.endsWith('!')){
  string = string.slice(0,-1);
}
return string;
 }