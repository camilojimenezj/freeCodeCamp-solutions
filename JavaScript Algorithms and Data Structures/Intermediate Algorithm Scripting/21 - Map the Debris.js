/* Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format `{name: 'name', avgAlt: avgAlt}`.

You can read about orbital periods [on Wikipedia](http://en.wikipedia.org/wiki/Orbital_period).

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2. */

function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    
    return arr.map(obj => {
            let period = 2 * Math.PI * (Math.sqrt((earthRadius + obj.avgAlt)**3/GM));
            return ({name : obj.name, orbitalPeriod: Math.round(period)})
            });
}
  
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
