/*const calcAverageHumanAge = function(ages) {
    const humanAge = ages.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
    const adult = humanAge.filter(age => age >= 18);
    console.log(humanAge);
    console.log(adult);

    const humAvg = adult.reduce((acc, dog) => acc + dog, 0) / adult.length;  // Fix the division by using adult.length
    return humAvg;
}*/

const calcAverageHumanAge = ages => ages
.map(age => (age <= 2 ? 2 * age : 16 + age * 4))
.filter(age => age >= 18)
.reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
console.log(avg1);

const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg2);

