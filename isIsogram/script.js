const isIsogram = str => {
    str = str.toLowerCase();
    for(let i = 0; i < str.length; i++) {
        if(str.indexOf(str[i], i + 1) !== -1){
            //Duplicates are found
            return false
        }
    }
    //Duplicates are not found
    return true;

}

const result = isIsogram('Machine')
const result1 = isIsogram('houUusee')
const result2 = isIsogram('Electric')
console.log(result ? 'is Isogram' : 'Not Isogram');
console.log(result1 ? 'is Isogram' : 'Not isogram');
console.log(result2  ? 'is Isogram' : 'Not isogram');
