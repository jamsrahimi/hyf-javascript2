'use strict';


function toCelcius(degreesFahrenheit) {
    return (degreesFahrenheit - 32) * 5 / 9;
}

function toFahrenheit(degreesCelcius) {
    return degreesCelcius * 9 / 5 + 32;
}

function weatherReport(city, degrees, unit, reporterFn) {
    // let city = 'Amsterdam';
    // let degrees = 3;
    // let unit = 'C';
    // let reportFn = console.log
    let newDegrees;
    let newUnit;
    if (unit === 'F') {
        newDegrees = toCelcius(degrees);
        newUnit = 'C';
    } else {
        newDegrees = toFahrenheit(degrees);
        newUnit = 'F';
    }
    const text = `The temperature in ${city} is ${newDegrees.toFixed(1)}°${newUnit}.`;
    reporterFn(text);
}

function weatherReport2(city, degrees, unit, reporterFn) {
    const converted = unit === 'F'
        ? { degrees: toCelcius(degrees), unit: 'C' }
        : { degrees: toFahrenheit(degrees), unit: 'F' };
    const text = `The temperature in ${city} is ${converted.degrees.toFixed(1)}°${converted.unit}.`;
    reporterFn(text);
}

console.log('The temperature in New York is ' + toCelcius(22).toFixed(1) + '°C.');

console.log('The temperature in Amsterdam is ' + toFahrenheit(5).toFixed(1) + '°F.');

weatherReport('Amsterdam', 5, 'C', console.log);
weatherReport2('Amsterdam', 5, 'C', console.log);

/*
  1. Look up the temperature in New York in degrees Fahrenheit
     Complete the toCelcius function (google if you don't know how to convert
     F to C).
     Write a console.log that uses your function, e.g.
     console.log('The temperature in New York is ' + ... + '°C.');
     Report the temperature with one decimal accuracy

  2. Look up the temperature in Amsterdam in degrees Celcius
     Complete the toFahrenheit function (google if you don't know how to convert
     C to F).
     Write a console.log that uses your function, e.g.
     console.log('The temperature in Amsterdam is ' + ... + '°F.');
     Report the temperature with one decimal accuracy

  3. Complete the weatherReport function such that when it is called like this:
     weatherReport('Amsterdam', 5, 'C', console.log)
     it writes to the console:
     'The temperature in Amsterdam is 41°F.
*/
