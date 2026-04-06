function spacey(array: string[]): string[] {
	let string = ''
	return array.map( (e) => string += e );
}
console.log(spacey(['kevin', 'has', 'no', 'space']));
console.log(spacey(['this', 'is', 'a', 'sentence']));
console.log(spacey(['lack', 'of', 'space']));