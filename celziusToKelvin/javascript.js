const calcKelvin = () => {
    const measure = {
        type: 'temp',
        unit: 'celzius',
        value: Number(prompt('Degress celsius: '))
    }
    let kelvin = measure.value + 273;
    return kelvin;
}
console.log(calcKelvin());