/**
 * Promise
 * 
 * An object that represents the eventual completion (or failure) of an asynchronous operation,
 * and its resulting value
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 * 
 * Asynchronous means that some sort of waiting is going on, 
 * there is a delay between when we ask for something to when we recieve it
 * 
 * Often we use promises to load data
 */

const fetch = require('node-fetch');

const delay = seconds => new Promise((resolve, reject) => {
    if (typeof seconds !== 'number')
        reject('Argument seconds must be a Number!');

    setTimeout(() => resolve(`${seconds} seconds delay is up`), seconds * 1000) 
});

// console.log("Zero seconds");

// delay(8)
//     .then(msg => msg.toUpperCase())
//     .then(msg => `${msg}`)
//     .then(msg => console.log(msg))
//     .catch(e => {
//         throw new Error(`${e}`)
//     })
//     .finally(() => {
//         console.log('We have finally finished');
//     });

// const spacePeople = () => {
//     return new Promise((resolve, reject) => {
//         const api = 'http://api.open-notify.org/astros.json';
//         const request = new XMLHttpRequest();
//         request.open('GET', api);
//         request.onload = () => {
//             if (request.status === 200) {
//                 resolve(JSON.parse(request.response));
//             } else {
//                 reject(new Error(request.statusText));
//             }

//             request.onerror = err => reject(err);
//             request.send();
//         }
//     });
// }

fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then(json => json.people)
    .then(people => people.map(p => p.name))
    .then(names => names.join(', '))
    .then(names => console.log(names))
    .catch(e => `Error: ${e}`)

