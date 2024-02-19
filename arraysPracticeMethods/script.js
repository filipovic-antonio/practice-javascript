const dogs = [
    {weight: 22, curFood: 250, owners: ['Alice', 'Bob']},
    {weight: 8, curFood: 240, owners: ['Matilda']},
    {weight: 13, curFood: 275, owners: ['Sarah', 'John']},
    {weight: 32, curFood: 340, owners: ['Michael']},
]

dogs.forEach(dog => dog.recFood = Math.trunc(dog.weight ** 0.75 * 28));
console.log(dogs);
const findSarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(`Sarah's dog is eating to ${findSarahDog.curFood > findSarahDog.recFood ?
'much' : 'little'}`);

const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recFood).flatMap(dog => dog.owners);
console.log(`${ownersEatTooMuch.join(' and ')}'s eating to much`);


const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recFood).flatMap(dog => dog.owners)
console.log(`${ownersEatTooLittle.join(' and ')}'s eating to little`);

const perfectRecFood = dogs.some(dog => dog.curFood === dog.recFood);
console.log(perfectRecFood);

const okayCurFood = dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.10;
console.log(dogs.some(okayCurFood));
console.log(dogs.filter(okayCurFood));
const sortRecFood = dogs.slice().sort((a,b) => a.recFood - b.recFood);
console.log(sortRecFood);
