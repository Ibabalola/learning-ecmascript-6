/**
 * Generators
 * 
 * A function that allow us to pause in the middle of execution to be resumed later
 * 
 * https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Iterators_and_Generators#:~:text=When%20called%2C%20generator%20functions%20do,it%20encounters%20the%20yield%20keyword.
 * 
 * - generator function are denoted by the use of an * right before the function name
 * - we pause the execution by using the new yield keyword with in the function
 * - yield can be used multiple times with a generator function
 * 
 * Make it easy for us to create async functions.
 */

 function* director() {
    yield "Three";
    yield "Two";
    yield "One";
    yield "Action";
 }

 // store call to yield function to a variable
const action = director();

// each time with hit a yield statement we need to restart the function
// to do this we use the next function
console.log(action.next().value);
console.log(action.next().value);
console.log(action.next().value);
console.log(action.next().value);
console.log(action.next().value);

function* eachItem(arr) {
    for(let i = 0; i < arr.length; i++) {
        yield arr[i];
    }
}

const letters = eachItem(['a', 'b', 'c', 'd', 'e', 'd', 'f', 'g']);

const intervalId = setInterval(() => {
    const letter = letters.next();
    if (letter.done) {
        clearInterval(intervalId);
        console.log("Now I know my ABC's");
    } else {
        console.log(letter.value);
    }
}, 500);
