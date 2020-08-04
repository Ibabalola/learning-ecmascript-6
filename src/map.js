/**
 * Map
 * The Map object holds key-value pairs and remembers the original insertion order of the keys. 
 * Any value (both objects and primitive values) may be used as either a key or a value.
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
 */

const course = new Map();
course.set('react', { description: 'ui'});
course.set('jest', { description:  'testing'});

console.log(course);
console.log(course.react); // undefined
console.log(course.get('react'));

const details = new Map([
    [new Date(), 'today'],
    ['items', [1, 2]]
]);

console.log(details.size);

details.forEach((item) => {
    console.log('item:', item);
});

// for..of iteration

for (let detail of details) {
    console.log('for..of', detail);
}

for (let detail of details.keys()) {
    console.log('for..of - with keys', detail);
}

for (let detail of details.values()) {
    console.log('for..of - with values', detail);
}

for (let detail of details.entries()) {
    console.log('for..of - with entries', detail);
}