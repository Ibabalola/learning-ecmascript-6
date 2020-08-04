/**
 * The `in operation` returns true if the specified property is in the specied object or its prototype chain.
 * 
 * in operator
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in
 */

const OWNER_STRING = 'owner';

const cars = [{
    make: 'BMW',
    model: '1 Series',
    year: '2015',
    owner: 'Isaac'
}, {
    make: 'Land Rover',
    model: 'Range Sport',
    year: '2018',
    owner: 'Jacob'
}, {
    make: 'Audi',
    model: 'TT',
    year: '2018'
}];

for (let car of cars) {
    if (OWNER_STRING in car)
        console.log(`${car.owner} is the owner of a ${car.make}, which was built in ${car.year}`);
}