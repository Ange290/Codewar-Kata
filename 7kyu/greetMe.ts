const greet = function(name: any) {
    let capital = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    return `Hello ${capital}!`;
}
console.log(greet('riley')); 
console.log(greet('JACK'));
console.log(greet('matt'));