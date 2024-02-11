const checkDogs = (dogsJulia,dogsKate) => {
    const dogsJuliaCorrected = dogsJulia.slice();
    dogsJuliaCorrected.splice(0, 1);
    dogsJuliaCorrected.splice(-2);
    const dogs = dogsJuliaCorrected.concat(dogsKate);
    console.log(dogs);

    dogs.forEach((dog, i) => {
        if(dog >= 3) {
            console.log(`Dog number  ${i + 1} is an adult, and is ${dog} years old `);
        } else {
            console.log(`Dog number  ${i + 1} is an puppy, and is ${dog} years old `);
        }
    })
}

checkDogs([3,5,2,12,7], [4,1,15,8,3]);