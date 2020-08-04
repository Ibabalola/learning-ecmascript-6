/**
 * Spread Operator
 * 
 * allows an iterable such as an array expression or string to be expanded in places where zero or more arguments
 * or elements are expected, or an object expression to be expanded in places where zero or more key-value pairs are expected.
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 */

 const cats = ['betty', 'carol', 'jynx'];
 const dogs = ['woof', 'dan', 'roger'];

 const animals = ['whales', 'giraffe', ...cats, 'snake', ...dogs, 'coyote'];

 console.log(animals);

 function sum(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [1, 2, 3];
  
  console.log(sum(...numbers));