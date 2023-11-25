const temperatures = [2,-2,23,-7,-6,20,'error', 1,6,18,-2,22];

const calcAmplitude = function(temps) {
    let max = [0];
    let min = [0];
    for(let i = 0; i < temps.length;i++) {
        const curTemp = temps[i];
        if(typeof curTemp !== 'number') continue;

        if(curTemp > max)  max = curTemp;
        if(curTemp < min)  min = curTemp;
    }
      console.log('This is the max: ' + max + ' ,this is the min: ' +  min);
      return max - min;
}
const amplitude = calcAmplitude(temperatures);
console.log('This is the amplitude: ' + amplitude);