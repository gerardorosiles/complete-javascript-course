// Remember, we're gonna use strict mode in all scripts now!
'use strict';

///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

const printForecast = function (arr) {
  let forecastString = ``;

  for (let i = 0; i < arr.length; i++) {
    const forecast = `... ${arr[i]}C\xB0 in ${i + 1} days `;
    forecastString += forecast;
  }

  forecastString = forecastString + ` ...`;

  console.log(forecastString);

  return forecastString;
};

const temps1 = [17, 21, 23];
let forecast = printForecast(temps1);
console.log(forecast);

const temps2 = [12, 5, -5, 0, 4];
forecast = printForecast(temps2);
console.log(forecast);
console.log(2021);
