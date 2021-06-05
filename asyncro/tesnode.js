


// DONT DELETE this is my experiment

/*
let a = { index: 1};
console.log('satu');

setTimeout( () => {
    console.log('before increment');
    console.log(a);
    setTimeout( () => {
        a.index++;
        
        console.log('after increment');
        console.log(a);
    }, 1000)
}, 2000);

console.log('dua');
*/


let obj = [
    {id: 1, name: 'John', age: 12, IQ: 120},
    {id: 2, name: 'Ben', age: 13, IQ: 180},
    {id: 3, name: 'Perry', age: 14, IQ: 134},
    {id: 4, name: 'Ben', age: 16, IQ: 150},
    {id: 5, name: 'Son', age: 11, IQ: 90},
];

function cekId(id) {
    return new Promise( (resolve, reject) => {
        const result = obj.find( (e) => { return e.id === id } );
        console.log(result);
        setTimeout( () => {
            if (typeof(id) == 'number') { 
                
                resolve( result );
            } else {
                reject( new Error( 'please check your input value !!'))
            }
            
        }, 2000);
    });
}

function cekName(id) {
    return new Promise( (resolve, reject) => {
        
        const result = obj.find( (e) => { return e.id == id});
        console.log('cekName...');
        setTimeout( () => {
            resolve(result.name);
        }, 2000);
    })
}

function cekIQ(id) {
    return new Promise( (resolve, reject) => {
        console.log('cek IQ...');
        const result = obj.find( (e) => { return e.id == id})
        setTimeout( () => {
            resolve( result.IQ );
        }, 2000);
    })
}






cekId(1)
    .then( (target) => cekName(target))
    .then( (targetName) => cekIQ(targetName))
    .then( (iq) => console.log(iq));












