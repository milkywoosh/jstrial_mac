// Promise as the best solution for replacing callback hell method

// const promise = new Promise()

/*
const p = new Promise( (resolve, reject) => {
    let value = 4;
    let truth = 3
    setTimeout( () => {
        
        if (value == truth) {
            resolve('success');
        } 
            reject( new Error(`the truth value should be ${truth} !!!!!!`));
    }, 2000);
});

console.log('take sometimes before execution');
p
    .then( result => console.log('result', result))
    .catch( reject => console.log('Error: .....', reject.message))
    ;// dont forget to use this semicolon at the very last
    // to make sure the new line of p doesnt show error

*/





// commited on mac: 27 March 2021
    // Replacing Callback(from mosh code in index.js file) with Promise
// Last time still get confused on how to consume this
// using Promise chaining, please re-learn again

const obj = [ {id: 1, gitHubUsername: 'mosh'}]

function getUser(id) {
    return new Promise( (resolve, reject) => {
        console.log('Reading user from database');
        
        let result = obj.find( (e) => { return e.id == id });
        console.log(result.gitHubUsername);
        setTimeout( () => {
            if (typeof(id) === 'number') {
                resolve( result );
            } 
            reject( new Error('please check the id, must be number !!!!!'));
        }, 2000);
        
    })
}

function getRepo(username) {
    return new Promise( (resolve, reject) => {
        
        setTimeout( () => {
            console.log('Calling github API')
            if (username || !username) {
                resolve(['repo1', 'repo2', 'repo3']);
            } else {
                reject(new Error('please recheck your value !!!!'));
            }
        }, 2000);
        
        
    });
} 

function getCommits(repo) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log('Calling GitHub API');
            resolve('commting a change');
        }, 2000);
    })
}

// consuming the promise as the replacement of callback
// getUser(1)
//     .then( user => getRepo(user.gitHubUsername))
//     .then( repos => getCommits(repos))
//     .then( commits => console.log('commits: ', commits))





getUser(1)
    .then( (userDB) => getRepo(userDB.gitHubUsername))
    .then( (repo) =>  getCommits(repo))
    .then( (commits) =>  console.log('this commits: ', commits))
    .catch( (error) => console.log(error.message)) ;



















// Creating settled promises
    /* this is really important for 
         simulating calling web API service complete succesfully
    
    
         */


