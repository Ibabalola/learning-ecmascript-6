/**
 * Arrow Function
 * 
 * An arrow function expression is a syntactically compact alternative to a regular function expression, 
 * although without its own bindings to the this, arguments, super, or new.target keywords. 
 * 
 * Arrow function expressions are all suited as methods, and they cannot be used as constructors.
 * 
 * An arrow function points to whatever the function returns and is used to keep 'this' in scope
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 */

const teams = [
    { name: 'Arsenal',           cups: '14'},
    { name: 'Chelsea',           cups: '8' },
    { name: 'Manchester United', cups: '10'},
    { name: 'Manchester City',   cups: '3' },
    { name: 'Newcastle',         cups: '3' }
];

teams.map(team => console.log(`Club Name: ${team.name}`));

teams.map(team => ({
    faCupWins: team.cups
})).forEach(cup => console.log(`FA cup wins ${cup.faCupWins}`));

/**
 * Arrow function can help us deal with the scope of the this keyword
 */

 const person = {
     first: 'Isaac',
     actions: ['play', 'code', 'eat', 'sleep'],
     printActions_with_this: function () {
         const _this = this; // use this approach to help with the lost 
         // of scope of the `this` with conventional function calls 

         this.actions.forEach(function (action) {
            const str = `${_this.first} likes to ${action}`;
            console.log(str);
        })
     },
     printActions_with_bind: function () {
         this.actions.forEach(function (action) {
            const str = `${this.first} likes to ${action}`;
            console.log(str);
        }.bind(this)); // .bind() helps with the lost of scope of the this
     },
     printActions_with_arrow: () => {
        console.log(`his name is ${this.first}`); // undefined
    },
    printActions: function () {
        this.actions.forEach(action => (
            console.log('with parenthesis on return'),
            console.log(`${this.first} likes to ${action}`)
        ))
    }
 };

 person.printActions();