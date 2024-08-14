const convertToCelsius = function(temp) {
  temp -= 32;
  temp *= (5 / 9);
  return Math.round(10 * temp) / 10;
};

const convertToFahrenheit = function(temp) {
  temp *= (9 / 5);
  temp += 32;
  return Math.round(10 * temp) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
