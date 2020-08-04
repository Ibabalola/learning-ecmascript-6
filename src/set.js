/**
 * Set
 * 
 * The Set object lets you store unique values of any type, whether primitive values or object references
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 */

 const books = new Set();
 books.add('Romeo and Juliet');
 books.add('Jacob and Isaac')
    .add('another book title');

console.log(books);
console.log(`We have ${books.size} in the set`);
console.log(`has Romeo and Juliet? ${books.has('Romeo and Juliet')}`);
console.log(`has Troy? ${books.has('Troy')}`);

books.delete('Jacob and Isaac');
console.log('Size', books.size);

const data = [2,3,2,1,2,3,45,6,6];
const set = new Set(data); // removes duplicates

console.log('data.length', data.length);
console.log('set.size', set.size);

for (let item of set) {
    console.log('for..of', item);
};

for (let value of set.values()) {
    console.log(value);
}