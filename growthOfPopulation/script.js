function calculatePopulationYears(initialPopulation, percentGrowth, additionalInhabitants, targetPopulation) {
    let population = initialPopulation;
    let years = 0;

    while (population < targetPopulation) {
        population += (population * percentGrowth / 100) + additionalInhabitants;
        years++;
    }

    return years;
}
const initialPopulation = 1000;
const percentGrowth = 2;
const additionalInhabitants = 50;
const targetPopulation = 1200;

const result = calculatePopulationYears(initialPopulation, percentGrowth, additionalInhabitants, targetPopulation);

console.log(`It takes ${result} years for the population to exceed ${targetPopulation}.`);
