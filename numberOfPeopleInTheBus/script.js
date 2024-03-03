const peopleInBus = busStops => {
   
    const totalPassengers = busStops.reduce((total, busStop) => {
        return total + busStop[0] - busStop[1];
    }, 0);
    return Math.max(totalPassengers, 0);
    
}
const result = peopleInBus([[3, 0], [4, 2], [8, 3]]);
console.log(result);