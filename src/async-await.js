/**
 * Async await
 * 
 * We can write asynchronous code with a more synchronous look and feel / code structure
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 * 
 * Async await available in node v8+
 * 
 * fetch / node-fetch is asynchronous
 * 
 * try..catch
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
 */

const fetch = require('node-fetch');

//  const delay = seconds => {
//      return new Promise(resolve => setTimeout(resolve, seconds * 1000))
//  };

//  const countToFive = async () => {
//     console.log("Zero seconds");
//     await delay(1);
//     console.log("one second");
//     await delay(1);
//     console.log("Two Second");
//     await delay(3);
//     console.log("Five Seconds");
//  };

//  countToFive();

// anonymous and self executing
(async (loginName) => {
    try {
        const response = await fetch(`https://api.github.com/users/${loginName}/followers`);

        const json = await response.json();
        const followerList = json.map(user => user.login);
        console.log(followerList);
        
    } catch (err) {
        console.log(`${err} occured`);
    }
})('ibabalola');