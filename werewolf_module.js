/* 
Define: werewolf_module
werewolf is a half-wolf human creature
so it is still part of human creature.
Therefore we will extend the person_module to
this module
*/

const Person = require('./person_module');

class Werewolf extends Person {
    constructor(name, birth, mutate, run, age) {
        super(name, birth, age);
        this.mutate = mutate;
        this.run = run;
    }

}

const John = new Werewolf('John', 1900, true, true);



console.log(John.age());
console.log(John.mutate);
console.log(John.run);
console.log(John.name);