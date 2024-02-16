const convertTitle = title => {
    //If exceptions started, it will be upper case
    const capitzalize = str => str[0].toUpperCase() + str.slice(1);
    //Some exceptions
    const exceptions = ['a', 'in', 'and','the', 'an','but', 'with', 'for','on', 'at', 'by', 'of',
    'to', 'up'];
    const titleText =  title
                       .toLowerCase()
                       .split(' ')
                       .map(word => exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)).join(' ');
    return capitzalize(titleText);
}

const result1 = convertTitle('This is a nice day'); //This Is a Nice Day
const result2 = convertTitle('Where is the bus NOW'); //Where Is the Bus Now
const result3 = convertTitle('Are you good with your friend'); // Are You good with Your Friend
const result4 = convertTitle('In this MESS'); // In This Mess
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);