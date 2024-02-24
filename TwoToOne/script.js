const longest = (s1, s2) => {
    const strings = s1.concat(s2);
    const uniqueString = new Set(strings);
    const sortedString =Array.from(uniqueString).sort().join('');
    return sortedString;
}
const result = longest('asdasdaccasdcdavyyyxx', 'dasdasweweyyxxyjklqrrr');
console.log(result);

