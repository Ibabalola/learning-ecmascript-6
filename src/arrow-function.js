/**
 * Arrow Function
 * 
 * An arrow function expression is a syntactically compact alternative to a regular function expression, 
 * although without its own bindings to the this, arguments, super, or new.target keywords. 
 * 
 * Arrow function expressions are all suited as methods, and they cannot be used as constructors.
 */

const teams = [
    { name: 'Arsenal',           cups: '14'},
    { name: 'Chelsea',           cups: '8' },
    { name: 'Manchester United', cups: '10'},
    { name: 'Manchester City',   cups: '3' },
    { name: 'Newcastle',         cups: '3' }
];

// teams.map(team => console.log(team.cups));

teams.map(team => ({
    faCupWins: team.cups
})).forEach(cup => console.log(`FA cup wins ${cup.faCupWins}`));