const solution = (str, ending) => {
    if (ending === '') {
        return true;
    }
    const lastCharacters = str.slice(-ending.length);
    return lastCharacters === ending ? true : false;
};

const result = solution('abc', 'bc');
console.log(result); 

