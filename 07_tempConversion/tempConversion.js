const convertToCelsius = function(temp) {
  let nombre = (temp - 32) * (5/9);
  let nombreArrondi = Math.round(nombre * 10) / 10
  return nombreArrondi;
};

const convertToFahrenheit = function(temp) {
  let nombre = (temp * (9/5)) + 32;
  let nombreArrondi = Math.round(nombre * 10) / 10
  return nombreArrondi;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
