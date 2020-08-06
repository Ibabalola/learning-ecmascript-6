/**
 * Desctructuring assignment
 * 
 * Gives us an easy way to extract data from Arrays, Objects and assign them variables
 * 
 * It can be used in functions, objects and arrays
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 */

 const [ first,,,fourth,,] = ["London", "Telford", "Birmingham", "Manchester", "Liverpool", "Newcastle"];

 console.log(`first ${first}`);
 console.log(`fourth ${fourth}`);

 const {title, price} = { 
     title: "Reuben",
     price: 7,
     description: "Cleveland's favourite sandwich",
     ingredients: ['bread', 'corned beef', 'dressing', 'sauerkraut', 'cheese']
 }

 console.log(title);
 console.log(price);

 const vacation = {
     destination: 'Chile',
     travellers: 2,
     activity: "skiing",
     cost: 4000
 }

 function vacationMarkerting ({destination, activity}) {
    return `Come to ${destination} and do some ${activity}`;
 }

 console.log(vacationMarkerting(vacation));