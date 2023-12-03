function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  const celsiusTemperature = 25;
  const fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
  console.log(`${celsiusTemperature} degrees Celsius is equal to ${fahrenheitTemperature} degrees Fahrenheit.`);
  