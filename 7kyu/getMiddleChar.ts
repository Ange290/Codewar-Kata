const getMiddle = (s: string) => {
    const middle = Math.floor(s.length / 2);
    return s.length % 2 === 1 ? s[middle] : s.slice(middle - 1, middle + 1);
};
