function findLargest(Array1, Array2){

    //I put largest number in start like null
    let largestNum = null;

    //First Array
    for(let i = 0; i < Array1.length; i++){
        if(Array1[i] > largestNum ){
            largestNum = Array1[i];
        }
    }

    //Second Array
    for(let i = 0; i < Array2.length;i++){
        if(Array2[i] > largestNum ){
            largestNum  = Array2[i];
        }
    }
    //return the largest number what we found with for loops
    return largestNum; 
}

const largestNumber = findLargest([1, 17, 3, 22], [5, 43, 7]);
console.log('This is the largest number in this two arrays: '+ largestNumber);