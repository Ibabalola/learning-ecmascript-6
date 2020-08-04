/**
 * for..of
 * 
 * The for...of statement creates a loop iterating over iterable objects,
 * 
 * A new loop in ES6 that help to iterate over iterable objects like:
 * - Array 
 * - Strings
 * - Sets
 * - Maps
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
 */

for (let charater of 'Word') {
    console.log(charater);
}

const topics = ['JavaScript', 'Node', 'React'];

for (let topic of topics) {
    console.log(topic);
}