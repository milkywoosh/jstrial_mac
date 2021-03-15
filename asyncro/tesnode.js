

/*
function cekID(id) {
    return   obj.filter( e => {
        return e.id > id;
    });
};


console.log(cekID(2));

*/


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

let obj = [
    {id: 1, name: 'John', age: 12, IQ: 120},
    {id: 2, name: 'Ben', age: 13, IQ: 180},
    {id: 3, name: 'Perry', age: 12, IQ: 134},
    {id: 4, name: 'Ben', age: 16, IQ: 150},
    {id: 5, name: 'Son', age: 11, IQ: 90},
];


/*
console.log('before');

checkById(2, (obj) => {
    console.log(obj);
    checkByAge(12, (obj) => {
        console.log(obj);
        checkByIQ(130, (obj) => {
            console.log(obj)
        });
    });
})


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
    setTimeout( () => {
        console.log('checkById...')
        callback( obj.find( (e) => {
            return e.id > id;
        }));
    }, 2000);
}
*/




