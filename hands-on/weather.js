'use strict'

let toCelsius = degreesFahrenheit => { return (degreesFahrenheit - 32) * 5 / 9; }


function toFahrenheit(degreesCelsius) {
    return degreesCelsius * (9 / 5) + 32;
}

function weatherReport(city, degrees, unit, reportFn) {
    let message;
    let newUnit;
    switch (unit) {
        case 'C':
            message = toFahrenheit(degrees).toFixed(1)+ 'F';
            break;
        case 'F':
            message = toCelsius(degrees).toFixed(1)+ 'C';
            break;
        default:
            message =console.log("Wronggggggggggg");
    }
    const text = '\nThe weather in ' + city + ' is ' + message ;
    reportFn(text);
    //return 'The weather in ' + city + ' is ' + degrees + ' ' + unit;

}

//const weater = weatherReport('New York', 34, 'Fahrenheit', 'Report');
const NewYorkReport = 'The temperature in New York is ' + toCelsius(46).toFixed(1) + ' degree Celsius';
console.log(NewYorkReport);

const amsterdamReport = 'The temperature in Amsterdam is ' + toFahrenheit(3).toFixed(1) + ' degree Fahrenheit';
console.log(amsterdamReport);

weatherReport('Amsterdam', 3, 'C', console.log);
