
/* Dont forget to do this:

npm init --y : this will create package.json inside folder

// LEARNING Asyncronous with Mosh Feg Hamedhani

*/


/*
 setTimeout is the example of NON-blocking Program or Asyncronous

// SINGLE Thread process 
// asyncronous really important in node forxmpl in network access
    // the following are important to understand in the operation of ASYNCRONOUS Process:
        - callback
        - promise
        - async/await

    when access database, it takes sometimes around 1 or 2 or maybe more seconds
    so there we need setTimeout() to cope with this situation by using callback, 
    promise or async/awaits
*/


let obj = [
    {id: 1, name: 'John', age: 12, IQ: 120},
    {id: 2, name: 'Ben', age: 13, IQ: 180},
    {id: 3, name: 'Perry', age: 14, IQ: 134},
    {id: 4, name: 'Ben', age: 16, IQ: 150},
    {id: 5, name: 'Son', age: 11, IQ: 90},
];

// example from Mosh

console.log('before');
// call function with Callback
// create any function here'
getUser(1, (anyforUser) => {   // outter function
    // console.log(anyforUser);

    getRepo(anyforUser.gituser, (repo) => {  // nested function
        console.log('Repos',repo);
    });

});
console.log('after');

function getUser(id, callback) {

    setTimeout( () => {
        console.log('reading user from DB');
        callback({id: id, gituser: 'Linus Torvald'});
    }, 1000);
};

// Exercise from Mosh Feg

function getRepo(username, callback) {
    
    setTimeout( () => {
        console.log('test');
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000); 
}


// Solution for callback HELL, refactor
getUser(1, getRepo);

function getRepo(anyforUser) {
    getRepo(anyforUser.gituser, gitCommits);
}
function gitCommits(repo) {
   gitCommits(repo, displayCommits);
}

function displayCommits(commits) {
    console.log(commits);
}


// DONT DELETE this is my experiment

/*
console.log('before');
getUser( (db) => {
    
        console.log(db);
    
    getRepo( db, (repos) => {
        console.log(repos);
    } );
});
console.log('after');

let obj = [
        {id: 1, name: 'John', age: 12},
        {id: 2, name: 'Ben', age: 13},
        {id: 3, name: 'Perry', age: 14},
        {id: 4, name: 'Ben', age: 16},
    ];
    

function getRepo(anyt, callback) {
    setTimeout( () => { 
        console.log('getRepo...');
        callback(['one', 'two']);
    }, 1000);
}


function getUser(callback) {
    setTimeout( () => {
        console.log('callback getUser...');
        callback(obj);
    }, 2000);
}

*/



// DONT DELETE this is my experiment
// NICE Experiment

/*
console.log('before');

// note: 3 adalah argument untuk filter
// id == 3
checkById(3, (obj) => {
    console.log(obj);
    // note: 13 adl argument utk filter
    // age > 13
    checkByAge(13, (obj) => {
        console.log(obj);
        // 130 adl argument utk filter
        // IQ > 130
        checkByIQ(130, (obj) => {
            console.log(obj)
        });
    });
});


console.log('after');

function checkByIQ(iq, callback) {
    setTimeout( () => {
        console.log('checkByIQ...');
        callback(obj.filter( (e) => {
            return e.IQ > iq;
        }))
    }, 2000);
}

function checkByAge(age, callback) {
    setTimeout( () => {
        console.log('checkByAge...');
        callback(obj.filter( (e) => {
            return e.age > age;
        } ));
    }, 2000);
}

function checkById(id, callback) {
    setTimeout( ) => {
        console.log('checkById...')
        callback( obj.find( (e) => {
            return e.id == id;
        }, 2000);
    }));
}
*/






