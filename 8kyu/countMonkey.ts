const monkeyCount = (n: number) => {
    const monkeys = [];
    for (let i = 1; i <= n; i++) {
        monkeys.push(i);
    }
    return monkeys;

}
console.log(monkeyCount(5)); // [1, 2, 3, 4, 5]
console.log(monkeyCount(3)); // [1, 2, 3]
console.log(monkeyCount(9)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]