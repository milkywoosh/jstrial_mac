
let arrObj  = [{
                "_id" : 1,
                "name" : "liam",
                "age" : 12,
                "job" : "hello world"
            },
            {
                "_id" : 2,
                "name" : "john",
                "age" : 13,
                "job" : "hello world"
            },
            {
                "_id" : 3,
                "name" : "paul",
                "age" : 14,
                "job" : "singer"
            },
            {
                "_id" : 4,
                "name" : "will",
                "age" : 15,
                "job" : "programmer"
            },
            {
                "_id" : 5,
                "name" : "lukman",
                "age" : 15,
                "job" : "programmer"
            },
            {
                "_id" : 6,
                "name" : "boy",
                "age" : 12,
                "job" : "hello world"
            },
];



/*
function collectValuesFromObj(arrObj) {
    let arrName =[];
    let arrAge = [];
    let arrJob = [];

    let i;
    for (i=0; i<arrObj.length; i++) {
        arrName.push(arrObj[i]['name']);
        arrAge.push(arrObj[i]['age']);
        arrJob.push(arrObj[i]['job']);

    }
    return [arrName, arrAge, arrJob];
    
}

// console.log(collectValuesFromObj(arrObj));
*/



/*

create property of object from other property

let integer0 = {
    "one" : 1,
    "two" : 2,
    "three": 3
}

let integer1 = {
    "four" : 4,
    "five" : 5,
    "six" : function () {return integer0["three"]*2 }, // get value from integer0["three"]
}

console.log( integer1['six']() ); // get value from integer0;
*/


/*
let creatingObj = Object.create(  // what's the purpose ??????
    {"name" : "john",
     "age"  : 15,
     "University": "Carnegie Mellon",
    });

console.log(creatingObj);
*/



/*

// add new object to array of Object
function addNewObjtoArr(arrObj, name, age, job ) {
    let store = arrObj;

    store.push({
        "_id" : arrObj.length+1,
        "name" : name,
        "age"  : age,
        "job" : job,
    })
    
    return store;
}

addNewObjtoArr(arrObj, "gene", 16, "Accounting");
addNewObjtoArr(arrObj, "rig", 15, "Customer Service");

console.log(arrObj);
*/



/*
// check the keys property
for (let i=0; i<arrObj.length; i++) {
    store.push(arrObj[i].hasOwnProperty("name"));
}
*/


// add new key-value pair in object with _id: 4  !!
//arrObj
/*
function addNewProperty(obj, id, keyProp, valueProp) {
   obj.find( (e) => { 
        if( e['_id'] == id) {
            e[keyProp] = valueProp;
        }
   });
}   


addNewProperty(arrObj, 4, "new Prop", "value");
console.log(arrObj[3]);
*/




/*
// current price of stock
let currStockPrice = new Object();
function updateStockPrice(obj, stockname, price) {
    obj[stockname] = price;
}
updateStockPrice(currStockPrice, 'UNVR', 1200);
updateStockPrice(currStockPrice, 'ANTM', 800);
updateStockPrice(currStockPrice, 'SRTG', 750);
console.log(currStockPrice);


// ADD stock to portofolio
let portofolio = new Object();
function addStock(porto, stockname, share) {
    porto[stockname] = share;
}

addStock(portofolio, 'UNVR', 50);
addStock(portofolio, 'ANTM', 80);
addStock(portofolio, 'SRTG', 25);
console.log(portofolio);

//get total value;
function lookUpPrice(obj) {
    Object.values(obj).forEach( (e) => {
        e;
    });
}

console.log(lookUpPrice(currStockPrice));

function getTotalPrice(porto, currentPrice) {
    let totalPrice = 0;
    let i;
    let valuesPorto = Object.values(porto);
    let valuesCurrPrice = Object.values(currentPrice);
    let iter = lookUpPrice(currentPrice);
    for (i=0; i<valuesPorto.length; i++) {
        totalPrice += valuesPorto[i] *valuesCurrPrice[i];
        console.log(valuesPorto[i], "*", valuesCurrPrice[i])
        
    }
    return totalPrice;
}
console.log(getTotalPrice(portofolio, currStockPrice))
*/



let o3 = Object.create(Object.prototype);
let newObj = {};
// console.log(o3 == newObj); // false;






// Definitive Guide Javascript Chapter 6: Object: page 122
// inherit function 
function inherit(p) {
    if (p == null) throw TypeError();
    if (Object.create) {
        return Object.create(p);
    }
    let t = typeof p;
    if (t!== "object" && t !== "function") throw TypeError();
    function f() {};
    f.prototype = p;
    return new f();
} 

var o = {};
o.x = 1;
var p = inherit(o);
p.y = 2;
var q = inherit(p);
q.z = 3;
console.log(q['x'] + q['y'] + q['z']);






