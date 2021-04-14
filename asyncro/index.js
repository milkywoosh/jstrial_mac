

// SAAT PIKIRANGTENANG JDI LEBIH MUDAH MENGINGAT
// TP  GIMANA CARANYA SAAT BANYAK TEKANAN TTP BISA DPT MENGINGAT DGN BAIK??


/* Dont forget to do this:

npm init --y : this will create package.json inside folder

// LEARNING Asyncronous with Mosh Feg Hamedhani

*/


/*
 setTimeout is the example of NON-blocking coding technic or Asyncronous

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


/* CATATAN YOUTUBE SANDHIKA GALIH

please visit: latentflip.com --> visualization asyncronous under the hood;
Javascript itu Single Threaded
ada "V8 Engine"

 ----> Thread : lingkup memory working
 ----> jika multiThread maka penggunaan memory makin besar
Asynchronous + single-threaded = Concurrency

Asynchronous + Multi-threaded = Parrarelism

+ Blocking vs Non-Blocking: teknik coding javascript
Blocking: eksekusi sesuai line of code, 1 line selesai baru lanjut
Non-Blocking: eksekusi bbrp line of code tanpa tunggu line pertama selesai

+ Synchronous & Asyncronous: berhubungan dgn Http Request, saat menggunakan AJAX

*/
 



// example from Mosh
/*
console.log('before');
// call function with Callback
// create any function here'
getUser(1, (anyforUser) => {   // outter function
    console.log('anyForUser', anyforUser);

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
function getRepo(username,  callback) {
    username = ['repo1', 'repo2', 'repo3']
    setTimeout( () => {
        console.log('test');
        callback(username);
    }, 2000); 
}
*/





// DON'T DELETE
//           This Note is adapted from MOSH FEGH
// REPLACE CALLBACK with PROMISE;


/*
function fetchDB(id) {

    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(obj.filter( (e) => { return e.id !== id}));
        }, 2000);
    });
}

// CONSUMING PROMISE 
const callP = fetchDB(2);
callP
    .then( result => console.log('result: ', result))
    .catch( reject => console.log('reject', reject));
    
// the following is the other form of this code
*/


let obj = [
    {id: 1, name: 'John', age: 12, IQ: 120},
    {id: 2, name: 'Ben', age: 13, IQ: 180},
    {id: 3, name: 'Perry', age: 14, IQ: 134},
    {id: 4, name: 'Ben', age: 16, IQ: 150},
    {id: 5, name: 'Son', age: 11, IQ: 90},
];



// commited on mac: 27 March 2021
    // Replacing Callback with Promise
/*
function objIq(value) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            if (typeof(value) == 'number') {
                resolve(obj.filter( (e) => {
                    return e.IQ > value;
                }))
            } else {
                reject(new Error('the value type must be integer'));
            }
            
        }, 2000);
    });
}



const p = objIq(120);
p
    .then( (e) => { console.log(e)})
    .catch( (error) => { console.log(error.message)});

*/






// Exercise from Mosh Feg # DONT DELETE

// CALLBACK HELL -- dont delete
// getUser(1, (user) => {
//     console.log(user.gitHubUsername);

//     getRepo(user, (repos) => {
//         console.log(repos[0], repos[1]);
        
//         getCommits( repos, (commits) => {
//             console.log(commits);
//         })
//     });
        
// });


getUser(1, displayUser ); // calling refactored Callback

//replacing CALLBACK HELL by refactoring
function displayUser(user) {
    console.log(user.gitHubUsername);
    getRepo(user, displayRepos);
}
function displayRepos(repos) {
    console.log(repos);
    getCommits( repos, displayCommits);
}
function displayCommits(commits) {
    console.log(commits);
}


 

// Last time still get confused on how to consume this
// using Promise chaining, please re-learn again

const obje = [{ id: 1, gitHubUsername: 'mosh'}]
function getUser(id, callback) {
    console.log('Reading a user from a databse....');
    setTimeout( () => {
        
        callback(obje.find( (e) => {return e.id == id})) ;
    }, 2000);
}

function getRepo(username, callback) {
    console.log('Calling GitHub API...');
    setTimeout( () => {
        
        callback(['repo1 db', 'repo2 db', 'repo3']);
    }, 2000); 
}

function getCommits(commits,callback) {
    setTimeout( () => {
        callback('committing a change');
    }, 2000);
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
    setTimeout( ()) => {
        console.log('checkById...')
        callback( obj.find( (e) => {
            return e.id == id;
        }, 2000);
    }));
}

*/



/* 

let obj = [
    {id: 1, name: 'John', age: 12, IQ: 120},
    {id: 2, name: 'Ben', age: 13, IQ: 180},
    {id: 3, name: 'Perry', age: 12, IQ: 134},
    {id: 4, name: 'Ben', age: 16, IQ: 150},
    {id: 5, name: 'Son', age: 11, IQ: 90},
];





// Pakai object 'obj';

/*
let value = 1;
callId(value++, (targetId) => {
    console.log(targetId);
    callId(value++, (targetId) => {
        console.log(targetId);
        callId(value++, (targetId) => {
            console.log(targetId);
        });
    });       
});


function callId(id, callback) {
    setTimeout( () => {
        callback(obj.find( e => {return e.id == id}));
    }, 2000);
}


*/


console.log('hello world');



