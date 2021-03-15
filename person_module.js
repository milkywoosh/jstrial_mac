// Modularization context for REACT

// basically this class is PRIVATE from outside file
// to make it ACCESIBLE use "module.exports"  before target or on the last line of code;
module.exports = class Person {
    constructor(name, birth) {
        this.name = name;
        this.birth = birth;
        this.age = function () {
            let date = new Date();
            return date.getFullYear() - this.birth;
        }
    }
    
}


// module.exports =  Person;
