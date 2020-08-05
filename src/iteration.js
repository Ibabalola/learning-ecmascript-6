/**
 * Iteration
 * 
 * Processing itesm in a collection
 * Using for loops, while loops, and map()
 * Custom iteration behaviour new in ES6
 * 
 * Iterable - JS objects define their own iteration behavior
 * Iterator - a standard way to produce a sequence of values
 * 
 * Useful for crearing our own functions that are going to loop 
 * through data
 * 
 * The iterable protocol is a way to customize iteration behavior
 */

 const title = 'ES6';

 // Symbol.iterator is a method returns the default iterator for an object
 // or factory of iterators
 console.log(typeof title);
 console.log(typeof title[Symbol.iterator]);

 const iterateIt = title[Symbol.iterator]();
 console.log(iterateIt.next());
 console.log(iterateIt.next());
 console.log(iterateIt.next());
 console.log(iterateIt.next());

 // creating an iterable function
 function tableReady(arr) {
     const nextIndex = 0;
     return {
         next() {
             if (nextIndex < arr.length) {
                 return { value: arr.shift(), done: false }
             } else {
                 return { value: undefined, done: true }
             }
         }
     }
 }

 const waitingList = ['Isaac', 'Theresa', 'Jacob', 'Jonah'];
 const iterateList = tableReady(waitingList);

 console.log(`${iterateList.next().value}, your table is ready`);
 console.log(`${iterateList.next().value}, your table is ready`);
 console.log(`${iterateList.next().value}, your table is ready`);
 console.log(`${iterateList.next().value}, your table is ready`);
 console.log(`Is this now finished? ${iterateList.next().done}`);