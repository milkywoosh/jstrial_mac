

// learning ES6 javascript


// ARROW FUNCTION
/*
// using return is a good practice
const test = (x,y,z) => { return x*y*z };

console.log(test(1,2,3));
*/



// FOR LOOP / USING FOR OF

/*
// looping over the array element;
let arr = ['john', 'ben', 'noel', 'berry'];

for (let element of arr) {
    // console.log(element + 'add word');
}

// looping over String
let strings = 'Hello world';
for (let element of strings) {
    console.log(element);
}

*/




/* CLASS  -->  A JavaScript class is not an object.
               It is a template for JavaScript objects. */

/*
class Car {
    constructor(brand, year, country) {
        this.brand = brand;
        this.year = year;
        this.country = country;
    }
    age() {
        let curYear = new Date();
        return curYear.getFullYear() - this.year;
    }
}

const Jeep = new Car('Jeep', 1990, 'USA');
// check the age of the car
// console.log('the age of the car: ',Jeep.age());

const Yaris = new Car('Yaris', 2009, 'Japan');

console.log(Yaris.brand);
console.log(Yaris.age());
console.log(Yaris.country);
*/


// PROMISE
/*
let promise = new Promise(function(myResolve, myReject) {
    
    myResolve();
    myReject()
});

promise.then(
    function(value) { }
    function(error) { }
);
*/




// INHERITANCE keyword is "Extends" and "super()"
// learn this more on OOP in Mosh course
/*
class Person {
    constructor(name, birth) {
        this.name = name;
        this.birth = birth;
        this.age = function () {
            let date = new Date();
            return date.getFullYear() - this.birth;
        }
    }
    
}

const john = new Person('john', 1946);

// Extending Property or Method

// Wizard is the child of Person, or the one that 'inherite' the property of Person
    class Wizard extends Person{
        constructor(name, fly=false, birth, age) {
            super(name, birth, age) // enabling the inherited trait from Person class
            this.fly = fly;
        }
    }

const Dumbledor = new Wizard('Dumbledor', false, 1000);
console.log(Dumbledor.name);
// console.log(Dumbledor.age());
console.log(Dumbledor.fly);
console.log(Dumbledor.age());

*/



// PROMISE
    // the following the object of promise
    // - Pending
    // - Fullfilled
    // - Rejected

    // those objects support 2 properties
      // "state", "result"

let myPromise = new Promise(function (myResolve, myReject) {
    
    // logic code
    let meat = 'bacon' || 'dog' || 'swikey' || 'snake';

    if (meat == 'bacon') {
        myResolve('please look another food');
    } else {
        myReject('you can eat this!')
    }

});

myPromise.then(
    function(value) {return value}
    function(error) {return error}
;





const prom = new Promise(function (myResolve, myReject) {
    // code logic here

    //if else or anything
    myResolve();
    myReject();
});

prom.then(
    
)
