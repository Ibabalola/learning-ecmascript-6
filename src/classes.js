/**
* Classes
* 
* ES6 gives us syntactical sugar to create what looks to be a class over
* JavaScripts's existing prototype-based inheritance.
* 
* The class syntax does not introduce a new object-orientated inheritance model to JavaScript.
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
* 
* Where class are blueprints for objects
*/

class Vehicle {
    constructor(description, wheels) {
        this.description = description;
        this.wheels = wheels;
    }

    describeYourself() {
        console.log(`I am a ${this.description} with ${this.wheels} wheels`);
    }
}

const coolSkiVan = new Vehicle('Green blue yellow', 4);
coolSkiVan.describeYourself();

class SemiTruck extends Vehicle {
    constructor() {
        super('semi-truck', 18)
    }
}

const groceryStoresSemi = new SemiTruck();
groceryStoresSemi.describeYourself();