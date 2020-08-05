/**
 * Enchancing Object Literals
 * 
 * Array constructor takes either a list of elements 
 * Or a number to signify how many spaces the array
 * should have.
 * 
 * The purpose of object literal enhancements is for 
 * shorter syntax, less typing
 */

 const thisIsMyShowSize = 8;
 const cat = {
     meow(times) {
        console.log("meow".repeat(times));
     },
     purr(times) {
        console.log("purr".repeat(times));
     },
     snore(times) {
        console.log("snore".repeat(times))
     },
     thisIsMyShowSize
 }

 console.log(cat.meow(5));
 console.log(cat.purr(3));
 console.log(cat.snore(2));

 console.log(cat.thisIsMyShowSize);