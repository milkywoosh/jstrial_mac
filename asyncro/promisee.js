// Promise as the best solution for callback hell

// const promise = new Promise()

const p = new Promise( (resolve, reject) => {
    let value = 4;
    let truth = 3
    setTimeout( () => {
        
        if (value == truth) {
            resolve('success');
        } else {
            reject( new Error(`the value should be ${truth} !!!!!!`));
        } 
    }, 2000);
});

console.log('take sometimes before execution');
p
    .then( result => console.log('result', result))
    .catch( reject => console.log('Error: .....', reject.message))
    ;// dont forget to use this semicolon at the very last
    // to make sure the new line of p doesnt show error