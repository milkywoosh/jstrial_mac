// Modularization context for REACT

// import { Person } from './person_module';
const Person = require("./person_module");

// basically this class is PRIVATE from outside file
// use "export" to make it accesible from the outside
class Wizard extends Person{
    constructor(name, fly=false, birth, age) {
        super(name, birth, age) // enabling the inherited trait from Person class
        this.fly = fly;
    }
}

const harry = new Wizard('harry', true, 2000);
console.log(harry.age());

// module.exports = Wizard;