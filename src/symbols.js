/**
 * Symbols
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
 * 
 * New type of primitive
 * Often used as unique IDs - because they won't conflict with object keys, which are strings
 * Define customized iteration behaviour
 */

const id = Symbol();
const courseInfo = {
    title: 'ES6',
    topic: ['Babel', 'Syntax', 'Classes', 'Functions'],
    id: 'sdasd'
};

console.log('Symbols: ', id);

courseInfo[id] = 41313;

console.log(courseInfo);