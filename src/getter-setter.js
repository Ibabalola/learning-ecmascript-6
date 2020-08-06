/**
* Getter / Setter
* 
* Now available in ES6 in objects and classes
*
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
*/

const attendance = {
    _list: [],
    set addName(name) {
       this._list.push(name)
    },
    get list(){
        return this._list.join(', ');
    }
}

attendance.addName = 'Isaac';
attendance.addName = 'Theresa';
console.log(attendance.list);
console.log(attendance._list);

class Hike  {
    constructor(distance, pace) {
        this.distance = distance;
        this.pace = pace;
    }

    get lengthInHours() {
        return `${this.calcLength()} hours`;
    }

    calcLength() {
        return this.distance / this.pace;
    }
}

const hike = new Hike(10, 2);
console.log(hike.lengthInHours);