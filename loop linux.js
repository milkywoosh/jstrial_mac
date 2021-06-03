// // nested loop
// count = 1
// for  (let i=0; i<5; i++) {
//     for (let j=0; j<5; j++) {
//         console.log(i, j, " ", count);
//         count++;
//     }
// }
// var i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i <= 5);


// var input = "Bagong pergi mencari jus jeruk"

// if (input) {
//   let toDisplay = ' ';
//   for (let i=0; i<=input.length; i++) {
    
//     if (input[i] === ' ') {
//       console.log(toDisplay);
//       toDisplay = '';
//   } else {
//     toDisplay+=input[i];
//   }

//     if (i === (input.length)-1) {
//       console.log(toDisplay)
//     }
  
//   }
// }


/*
let input = "John Lennon";

if (input) {
  var storedTemp = '';
  for (let i=0; i<input.length; i++) {
    if (input[i] === ' ') {
      // jika ' ' maka print storedTemp
      console.log(storedTemp);
      // fungsi next storedTemp: assign '' baru
      // shg saat increment input[i] baru
      // storedTemp yg diprint sebelumnya replaced
      storedTemp = 'x'; //???
      
    } else {
      storedTemp+=input[i];
    }

    if (i === input.length-1) {
      //saat i ke 1 maka print storedTemp
      console.log(storedTemp);
    }
  }
} else {
  console.log('the input is invalid')
}
*/






/**
 * Buatlah sebuah program yang akan mengurutkan huruf dari sebuah input string.
 * 
 * Contoh 1:
 *   - Input  : javascript
 *   - Output : aacijprstv
 * 
 * Contoh 2:
 *   - Input  : fedcba
 *   - Output : abcdef
 */

// var input = 'javascript';
// var kamus = 'abcdefghijklmnopqrstuvwxyz';
// var output = '';

// for (let i=0; i<kamus.length; i++) {
//   for (let j=0; j<input.length; j++) {
//     if ( input[j] === kamus[i]) {
//       output+=input[j]
//     }
//   }
// }
// console.log(output);


function bs(string) {
    let store = '';
    let flag = true;

    do{
        flag = false;
        for (let i=0; i<string.length; i++) {
            if (string[i] > string [i+1]) {
                store+= string[i+1];
                flag = true;
            }
        }

    }while(flag);

    return store;
}

console.log(bs('java'));

// function rec(n, exp) {
//     if (exp == 0) {
//       return 1;
//     } else {
//       console.log(n, exp-1);
//       return n * rec(n, exp-1);
//     }
// }

// console.log(rec(2, 4))


// 8 = 2** ?

// function div(value, n, count=0) {
    
//     if (value == 1) {
//       return count;
//     } else {
//       console.log(value, n, count)
//       return value / div(value/n, n, count+1);
//     }
// }
// console.log(div(8, 2));







// for (let i=0; i<angka.length; i++) {



// }



/*
function pow(x, n) {
    // https://javascript.info/recursion  --> explanation
    if (n == 1) {
        console.log('x', x, n)
        return (x);  // 2
    } else {     
        console.log('else', x, n)    // 2,3; 2,2; 2,1
        return (x * pow(x, n-1))
    }
}

console.log(pow(2, 3));

*/






/*
function recursion_factorial(n) {
    if (n === 1) {
        return (1)
    } else {
        return (n * recursion_factorial(n-1))
    }
}
console.log(recursion_factorial(4));
*/



/*let arr =[];

function add(Name, age) {
    let obj ={
        Name: Name,
        age: age
    }

    arr.push(obj);
}



add('liam', 90);
add('john', 60);
add('noel', 90);
add('george', 60);

// fetch data
// function fetchByName(x) {
//     let obj = []
//     for (let i=0; i<arr.length; i++) {
        
//         if (arr[i].Name === x) {
//             obj.push(arr[i]);
            
//         } else if (arr[i].age === x) {
//             obj.push(arr[i]);
//         }
//     }

//     return (obj)
// }

// console.log(fetchByName(60));


//binary search
/*function bs(arr) {
    let swapped;
    let temp;
    do { swapped = false;
        for (let i=0; i<arr.length-1; i++) {
             if (arr[i] > arr[i+1]) {
                temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }
     } while (swapped);
     return (arr)
}

console.log(bs([23,24,34,45,67,89,112]));
*/


/*
function bs(array) {
    let unit = array.length-1;
    let swapped = true;

    do {swapped = false;
        let temp;
        for (let i=0; i<unit; i++) {
            if (array[i] > array[i+1]) {
                
                temp = array[i+1];
                array[i+1] = array[i];
                array[i] = temp;
                swapped = true;
                

            }
        }

    } while (swapped);

    return (array);
}

//console.log(bs(['joni', 'ria', 'zack', 'ben', 'aragon']));

console.log(bs([6,5,4,3,2,1]));
*/


/*
let obj = [
    {
        Nama : 'john',
        nilai : [80, 80, 80, 80],
        absen : 4,
        avg: 0  // fungsi: untuk tampung average dari nilai [80, 82, 78, 90];
    },
    {  Nama : 'marry',
        nilai: [68, 74, 92, 85],
        absen: 3,
        avg : 0
    },
    {  Nama : 'ben',
        nilai: [96, 83, 78, 90],
        absen: 5,
        avg: 0
    },
    {  Nama : 'bruno',
        nilai: [86,76,63,90],
        absen: 4,
        avg: 0
    }, 
    {  Nama : 'perry',
        nilai: [71,67,89,54],
        absen: 4,
        avg: 0
    }
];
*/



// JANGAN hapus =============================
/*
let store = []
let substore = [];
let inc = 0;
for (let i=0; i<obj.length;i++) {
    for (let j=0; j<obj[i].nilai.length; j++) {    

    }
    substore.push(obj[i].nilai);   
}

console.log(substore);
*/


/* Result :
[
    [ 80, 82, 78, 90 ],
    [ 68, 74, 92, 85 ],
    [ 96, 83, 78, 90 ],
    [ 86, 76, 63, 90 ],
    [ 71, 67, 89, 54 ]
  ]
*/


/*
// jangan hapus =============================
// DOING :  SUM all element nilai in each array, count Average, and filter with >=79; 


let words = 'The following student who did not passed the test [>=79] :';
// let inc = 0;
// filter student who passed the grade
function filterAverage(average) {
    //variable "studentPassedTheTest" dapat diset jadi let atau tidak sama sekali
    studentPassedTheTest = [];
    for (let i=0; i<obj.length;i++) {
        // jika di dalam function: 
        // variable "inc" dapat diset jadi let atau tidak sama sekali
        inc = 0;
        for (let j=0; j<obj[i].nilai.length; j++) {
            inc+= (obj[i].nilai[j])/obj[i].nilai.length;
            obj[i].avg = inc;

        }
        if (obj[i].avg >= average) {
            studentPassedTheTest.push(obj[i]);
            
        }
        
    }
    return( studentPassedTheTest );
}
console.log(words);
console.log(filterAverage(79));
*/





/*
//  Jangan dihapus
// SUM all element inside an array, and group them inside an new array

let substore = [];
for (let i=0; i<obj.length;i++) {
    inc = 0;
    for (let j=0; j<obj[i].nilai.length; j++) {
        // inc + [jumlah tiap nilai]/ [length dari array nilai]
        inc+= (obj[i].nilai[j])/obj[i].nilai.length;
    };
    substore.push(inc)
}


console.log(substore);  // result:  [ 330, 319, 347, 315, 281 ]
*/




/*
let arr = [];
function addObj(nama, nilai, absen) {

    let obj = {
        Nama : nama,
        nilai : nilai,
        absen : absen
    }

    arr.push(obj);
}

addObj('tyron', [84,65,69,85], 4);
*/










// bole hapus ===============================




/*let number = [
    {
        Name:'John',
        angka: [1,2,3,4,5]
    },
    {
        Name: 'Ben',
        angka: [3,4,5,6,7]
    }
]
*/

// let arr = [];
// for (let i=0; i<number.length; i++) {

//     // console.log(number[i].angka);
//     arr.push(number[i].angka);

// }
// console.log(arr)


/*
// == PLEASE DONT DELETE ====

//INPUT : i love javascript
//OUTPUT : '$ l$v$ j$v$scr$pt'

let kata = 'i love javascript';
let vocal = 'aiueoAIUEO';
let output = '';
let x = '';

for (let i=0; i<kata.length; i++) { 
    output = kata[i];
    console.log(output, i)
    
    for (let j=0; j<vocal.length; j++) {
        
        if (kata[i] === vocal[j]) {
            output='$';
        } else {
            
        }
    }
    x+=output;    
}
console.log(x);

*/




/*

// CONVERT KEMBALIAN;

// BAGAIMANA JIKA KEMBALIAN 5000 SUDAH HABIS? EXCHANGE DENGAN JUMLAH LAIN???????
function change(amount, coins) {
    if (amount === 0) {
        return [0, []];
    }
    if (coins.length === 0 && amount > 0) {
        return [Infinity, []];
    }
    if (coins[0] > amount) {
        return change(amount, coins.slice(1));
    } else {
        var loseIt = change(amount, coins.slice(1));  // just one call of change
        var useIt = change(amount - coins[0], coins); // just one call of change
        if (loseIt[0] < 1 + useIt[0]) {
            return loseIt;
        } else {
            return [1 + useIt[0], useIt[1].concat(coins[0])];
        }
    }
}
// CONVERT COIN
    // 5000
    // uang: 100, 200, 500, 1000, 2000, 5000, 1000, 20000, 50000, 100000;
console.log(change(0, [9000]))     

*/






/*
// function longest(str) {
    let str = 'now i love';
    console.log(str.length);
    let record = 0;
    let ix = 0;
    let i = 0;
    let wordLength = 0;
    while(true) {
        console.log(ix,'test 0:', 'i: ', i, 'str: ', str.indexOf(' ', i));
        wordLength = str.indexOf(' ', i) - (i); //

        console.log(ix,'test 1:', 'i:', i, 'wl: ',wordLength);

        if (str.indexOf(' ', i) === -1) {
            console.log(ix,'test 2:','i:', i);
            wordLength = str.length-i;
            console.log(ix,'test 3:', 'wl: ',wordLength);
        }
        console.log(ix, i, wordLength);
        i = i + (wordLength > 0 ? wordLength : wordLength*(-1)) + 1; // jgn lupa ada 1 !!
        // 4 = 4+(1>0) => 1
        //
        console.log(ix,'test 4:', 'i:',i, 'wl: ',wordLength);
       
        if (wordLength > record) {//3>0, 1>3,  
            record = wordLength;// 3, 3, 
        }
        console.log(ix, 'record: ', record);

        if (i > str.length) {
            break;
        }
        ix++;
    }
//   return record;
console.log(record);


// }
// console.log(longest('i love you so mucccch'));

*/


/*
// nge trace method 'indexOf('x', i);

let x = 'i loves you';
let flag = true;
let arr = [];

for (let i=0; i<x.length; i++) {
   
    if ((x.indexOf(' ',i)) >= -1) {
        arr.push(x.indexOf(' ', i));
        
    }
   
}
console.log(arr);
*/



/*
let cek = 'oke bole paman';
let x = 0;
let arr = [];
let flag = true;
while (flag) {
    for (let i=0; i<cek.length; i++) {
        if (cek.indexOf(' ', i) != cek.indexOf(' ', i+1) ){
            arr.push(cek.indexOf(' ', i));
            flag = false;
        }   
    }
}

console.log(arr);
*/



/*
function sayCount() {
    let arr = [];
    for (let i=0; i<5; i++) {
        arr.push(i);
    }
    
    return arr;
}

sayCount();
console.log(sayCount());

*/




/*
const square = (number) => number*number;
console.log(square(1000));
*/









/*  spread operator 

let first = [1,2,3];
let second = ['one', 'two', 'three'];

let combine = [...first, 'four', ...second, ...first];
console.log(combine);

*/



/*  array.splice(from, till) -> modifying array
let arr = [1,2,3,5,6,8];

let splc = arr.splice(1, 4);
console.log(arr); // result 1, 8
console.log(splc); // result 2, 3, 5, 6
*/



/* iterate array using "of"

let arr = [1,2,3,5,6,8];

for (let number of arr) 
    console.log(number);

*/



/* forEach() method
let arr = [1,2,3,5,6,8];

arr.forEach( function(number, index) { 
    console.log(index, number) 
});
*/


/*
let arr = [1,2,3,5,6,8];
let joined = arr.join();
// console.log(joined.length);
// console.log(joined);

 let separate = () => {
    let store='';
    for (let i=0; i<joined.length; i++) {
        if (joined[i] != ',') {
            store+=joined[i];
        }
    }
    return (store);
}

console.log(separate());

*/
/*
let cek = 'Creating array in Javascript';
console.log(cek.split(' ').join('-'));
*/


/*
const jobs = [
    {id: 1, age: 12, Name: 'John', skill:{sql:true, mongo:true}, run() {console.log( 'this')}},
    {id: 1, age: 11, Name: 'Fella',  skill:{sql:false, mongo:true}, run() {console.log( 'this')}},
    {id: 3, age: 5, Name: 'Ben',  skill:{sql:true, mongo:true}, run() {console.log('this')}}
];


// let getJobs = jobs.find(job => (job.Name == 'John') || {});

let arrs = [];

// let cek = arrs.every( n =>  (n == ' ')  || (n == '(') || ( n == ')'));

const filterAge = jobs.find( function (e) { return e.age == 5});

console.log(filterAge);

*/



/*
let jobs = [
    {id: 1, Name: 'John', salary: 2000, skill:{sql:true, mongo:true}, run() {console.log( 'this')}},
    {id: 1, Name: 'Fella',  salary: 2400, skill:{sql:false, mongo:true}, run() {console.log( 'this')}},
    {id: 3, Name: 'Ben',  salary: 5000, skill:{sql:true, mongo:true}, run() {console.log('this')}}
];

const job_Guido = { id: 2, Name: 'Guido', skill:{sql: false, mongo:true}, run() {console.log('this')}}

// push jobs + job_guido

*/






/*
let store = []
let substore = [];
let inc = 0;
for (let i=0; i<obj.length;i++) {
    for (let j=0; j<obj[i].nilai.length; j++) {    

    }
    substore.push(obj[i].nilai);   
}

console.log(substore);
*/


/*
// DONT DELETE
// Note: tracing how this algorithm works FIX 

// to find Prime number in array
function isPrime(element, index, array) { // note: index & array parameters are not used here!!!!
    let start = 2;
    let stroke;
        // [2, 3, 4, 5]
        console.log(`1 -- √${element}: ${Math.sqrt(element)} -->> process -->> `, start,'<=', Math.sqrt(element), '?', (start <=  Math.sqrt(element)))
        
    while (start <= Math.sqrt(element)) { if false, langsung ke XPathResult,if true -> check modulus
        
        stroke = start++
        console.log(`---------- start: ${element} % ${stroke}: `, element % stroke)
        
      if (element % stroke < 1) { // filter agar PRIME number tidak qualified, sehingga jump to next
         
         console.log('result: false -----')
          
        //   console.log('2 start: ', start);
        return false; // if return false: means that it will not return anything
      }
    }
    console.log('3.  hasil: ', element);
    return element > 1;
  }
  

  let arr = [2, 3, 8, 9, 17,18, 19, 23, 29];
  console.log(arr.filter(isPrime)); 
*/

/*
function isPrime(element, index, array) {
  let start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

let arr = [2, 3, 4, 5, 6, 8, 9, 17];
console.log(arr.filter(isPrime)); 

*/


/*

// ---- FACTORY FUNCTION with OBJECT
// note : if the key-value pair has the same name, just write it once. etc: sideA, sideB
// note : the function within Object, it doesnt need "function" keyword
function square(sideA=1, sideB=1) {
    return {
        sideA,
        sideB,
        area(multiply=1) {
            return( (sideA*sideB) * multiply );
        }
    
    };
}


let square_A = square(5,10);
let square_B = square(10,20);

console.log(square_A.area(2));
console.log(square_B.area(2));

*/


/*

// ----- TITLE VIDEO: Factory Function ------------

    //the purpose of Factory Func : creating new Object

    // FACTORY FUNCTION with OBJECT
    // 5 adalah brp persen dari 10

export function percentageOfNumber(piece = 1, number=1, percent=100) {
    return{
        number,
        percent,
        piece,

        // method
        calculate() {
            if (piece == number) {
                
                return `${piece} is 100% of ${number}`
            } else {
            let result =( (number-piece) / number ) * percent ;
            return `${piece} is ${result}% of ${number}`
            }
        }
    }
}

let percent1 = percentageOfNumber(20, 1000);

console.log(percent1.calculate());

*/


/*
//---- TITLE VIDEO: Constructor Function ------


    // the purpose of Constructor Func : creating new Object

    // Note: 

    // camel notation: camelCase
    // Pascal notation: PascalNotation---> for CONSTRUCTOR FUNCTION
    // this notation is common Convention among developer


//  factor function 
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}

// Constructor Function: PascalNotation
 
function Circle(radius) {
    this.radius = radius;
    this.draw = function(a,b) {
        // console.log('draw');
        return a*b;
    }
}

const circle1 = new Circle(1);
console.log(circle1.radius);

const circleRadius = new Circle();
// a*b ==> 4*5
console.log(circleRadius.draw(4,5));

*/




/*
// ----VIDEO TITLE: Value vs Reference Type ------


let obj = { value: 10};

// note: obj parameter inside increase function will be visible to
//      'obj' value outside function
function increase(obj) {
    obj.value++;
}

increase(obj);
console.log(obj); // result 11

*/


/*
// ---- VIDEO TITLE: Enumerating Properties of an Object ----

   // note: using IN and OF

const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
}

// use  "IN"
for (let key in circle) {


    // console.log(key); // to enumerate the member

    // console.log(key, circle[key]); // to enumerate the value member
}

// use "OF"
for (let key of Object.keys(circle)) {


    // console.log(key); // to enumerate the member

    // console.log(key, circle[key]); // to enumerate the value member
}

// use "entry" and "entries"
for (let entry of Object.entries(circle)) {

    // lebih singkat daripd using Object.keys(object)
    console.log(entry); // to enumerate the value member
}


// console.log(Object.keys(circle)) // ==> result array


*/


/*

//--- DONT DELETE
//--- THIS IS HOW TO TRACE THE VALUE STACK
function largestOfFour(arr) {
  var results = [];
  var stepX=0;
  var stepY=0;
  let x = 0;
  let y = 0;
  for (var n = 0; n < arr.length; n++) {
    // initially largest number is the first element in each sub-array
    var largestNumber = arr[n][0];
    
    
    x++;
    console.log(  '...', largestNumber);
    
    
    
    for (var sb = 1; sb < arr[n].length; sb++) {
       console.log( '...','arr[n]', arr[n], arr[n][sb],' > ', largestNumber);
       
       y++;
       
      if (arr[n][sb] > largestNumber) {
    
        largestNumber = arr[n][sb];
      }
    } 
    //result[n] = largestNumber <--- SAME WITH  ---> results.push(largestNumber);
    results[n] = largestNumber;
    stepX += x;
    stepY += y;
    console.log(results[n],'stepX: ', stepX, 'stepY: ',stepY);
  }

  return results;
}
*/
// let arrr = [[4, 5, 1, 3], [27, 3, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];
// console.log(largestOfFour(arrr))

// let arr= [2,3,4,5,55,3,2,12]


/*
// DONT DELETE!! This is an important note

function findLargesInArrays(arg) {
    let result = [];

    for (let i=0; i<arg.length; i++) {
        // state largestNumber
        // arg[i][0] is the first element in each sub array
        var largestNumber = arg[i][0];

        // to compare each element, i need to start the element 
        // ... from second and first, and then do switch
        for (let j=1; j<arg[i].length; j++) {

            // the logic switch
            if (arg[i][j] > largestNumber) {

                largestNumber = arg[i][j];
                
            }
            
        }
        // remember: this last store must be in the LAST PART of loop
        // so it will avoid bug
        // like:  [27, 3, 18, 26] -> if the biggest value at the leftish position
        // it will have an error, if i put <result[i] = largestNumber;> after switch value
        result[i] = largestNumber;
    }
    
    return result;
}



let nestedArr = [[4, 5, 1, 3], [7, 27, 3, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];
console.log(findLargesInArrays(nestedArr));

*/



/*
// convert decimal number to Binary
let number = ~10// real binary: 1001, inversion: 
let numberInvert = ~9; //?

console.log(number);
console.log(numberInvert);
let toBinary = number.toString(2);//
console.log(toBinary); // 8: 1000 --> 

*/


/*
function factorial(n) {
    let store = 1;
    for (let i=n; i>=1; i--) {
        store*=i //4,3,2,1
    }
    return (store);
}
console.log(factorial(4));

// factorial 
function factorialize(n) {
    let store = 1;
    for (let i=n; i>0; i--) {
        if (n == 0) store = 1;
        if (n > 0) store*=i;
    }
    return store;
}
  
console.log(factorialize(5));
*/



// Learning Class JavaScript;

/* 
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
        this.age = function (info="age: ") {
            let date = new Date();
            return (`${info}${date.getFullYear() - this.year} years old`);
        }
    }
}

const BMW = new Car("jaguar", 2000);

console.log(BMW.name);
console.log(BMW.year);
console.log(BMW.age());


const Honda = new Car("brio", 2015);
console.log(Honda.name);
console.log(Honda.year);
console.log(Honda.age())
*/



/*
class Node {
    constructor(data=null) {
        this.data = data;
    }
}


class Car {
    constructor(root=null) {
        this.root = root;
    }

    // ADD DATA
    add(data) {
        // node will be responsible for 
        // showing where is our position in the tree
        const node = this.root;

        if (node === null) {
            this.root = new Node(data);
            console.log(node);
            console.log(this.root);
            console.log(this.root);
            console.log(node);
        } else {
                        
        }

    }
}


const NewCar = new Car();

NewCar.add(23);
*/

/*
Dibawah ini tersedia sebuah function fixTheWord yang berfungsi untuk membetulkan 
string yang diterima yaitu berupa sebuah kalimat yang dapat dibaca.
Function fixTheWord akan melalui beberapa function dan mengembalikan sebuah string 
baru yang telah berubah atau telah dibetulkan.

Adapun function-function yang harus digunakan sebelum function fixTheWord adalah :
function removeSymbols, function capitalizeString , transformNumberToAlphabet
Function removeSymbols : menerima parameter berupa string dan mengembalikan string baru dengan 
menghapus semua simbol  dan menggantinya dengan ‘ ‘ (spasi).

Ex: “%&h3ll0+w0rld\!” => “h3ll0 w0rld”
Function transformNumberToAlphabet: menerima parameter berupa string dan mengembalikan
string baru dengan perubahan dimana untuk beberapa huruf, diubah menjadi bentuk angka
dengan pola berikut:
Angka 1 diganti menjadi Huruf : i
Angka 3 diganti menjadi Huruf : e
Angka 5 diganti menjad Huruf : s
Angka  0 diganti menjadi Huruf o
Angka 4 diganti menjadi Huruf a
Ex : H3ll0 W0rld => “Hello World”
Ex: “H3l1c0pter Fly 4w4y” => “Helicopter Fly Away”

Function capitalizeString: menerima parameter berupa string dan mengembalikan string baru
yang merupakan kata yang telah dikapital. Kata yang kapital: huruf depan setiap kata besar /
uppercase, dan huruf sisanya kecil / lowercase.
Ex: “hello world” => “H3ll0 W0rld”
*/


/*
// “%&h3ll0+w0rld\!” => “h3ll0 w0rld”
//  H3ll0 W0rld => “Hello World”

// \W -> regex filter non-word character
// \w -> regex filter word character
// /target/g --> find target

// %&h3ll0+w0rld\!
// h3ll0-w0rld%th1s$I5-4n-3x4mple-s3nt3nc3+!"

let removeSymbols = function(str) {
    let store = '';
    for (let i=0; i<str.length; i++) {
        if (str[i] == '4') {
            store += 'a';
        } else if (str[i] == '1') {
            store += 'i';
        } else if (str[i] == '3') {
            store += 'e';
        } else if (str[i] == '5') {
            store += 's'
        } else if (str[i] == '0') {
            store += 'o'
        } else if (str[i] == '+' || str[i] == '-' || str[i] == '%' || str[i] == '$') {
            store+= ' ';
        } else {
            // penting -----------
            store+=str[i]
        }
    }
    
    // match only alphabeth with this regex <<  /[A-Za-z\s]/g  >>
    // which .join() method will return only alphabet
    let remove = store.match(/[A-Za-z\s]/g);
    return remove.join(''); // try-->    .join('-')
}
console.log(removeSymbols("h3ll0-w0rld%th1s$I5-4n-3x4mple-s3nt3nc3+!"));


function capitalizeString(str) {
    let store = '';
    for (let i=0; i<str.length; i++ ) {

        if (str[i-1] == ' ') {      //------- BAGIAN PENTINGGGGGG !!!!!
            store+= str[i].toUpperCase();

        } else if (i == 0) {        //------  BAGIAN PENTINGGGGGG !!!!!
            store+= str[i].toUpperCase()
        } else {
            store += str[i];
        }
    }
    return store;
}

console.log(capitalizeString(removeSymbols("h3ll0-w0rld%th1s$I5-4n-3x4mple-s3nt3nc3+!")));

*/



/*
// base (n == 0) return 3
// 2f(n-1)+4   n > 0

function f(n) {
    if (n == 0) {
        return 3;
    } else {
       
        return ( (2*f(n-1) + 4) );
    }
}

console.log(f(4));

*/


/*

Teman kamu sedang melakukan penelitian sains. Awalnya ia menyimpan 1
bakteri di dalam sebuah kotak. Setiap harinya, setiap bakteri akan
membagi menjadi N bakteri. Selain itu, teman kamu akan menambahkan B bakteri
ke dalam kotak itu. Bantulah temanmu mencari jumlah bakteri pada hari ke-i
menggunakan rekursi!

[INSTRUKSI]
Tersedia 3 paremater sebagai inputan yang merupakan sebuah interger:
    1) N : jumlah bakteri setelah pembagian satu bakteri, misal: propagating 1 bakteri menjadi 30 bakteri/perhari
    2) B : jumlah bakteri yang ditambahkan ke dalam kotak setiap hari
    3) i : hari yang kita ingin tahu jumlah bakterinya
Output: jumlah bakteri pada hari ke-i

[CONTOH]
1) N = 2, B = 3, i = 3    --> 13

*/


/*
========================
Soal 4 : Number Grouping
========================

Name :andrawina kirana adi

Disediakan sebuah function numberGrouping yang bertugas untuk menerima sebuah parameter berupa angka,
 dan mengembalikan susunan angka baru yang merupakan hasil pengelompokan berdasarkan 3 digit angka.
  Apabila jumlah angka yang belum dikelompokan ada 4 maka akan dibagi menjadi 2 buah 
  2 digit angka tidak 3 dan 1
  
Ex: Input: [ 1 , 2 , 3 , 4 , 5 , 6 ]
Output: 123-456
Input: [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 1]
Output: 123-456-78-91
Input: [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8]
Output: 123-456-78

*/






// checking the the EQUAL or DIFFERENT STRING
/*
let str = 'nasi goreng';
let result = str.slice(-100);
console.log(result);

*/

/*
var patt = new RegExp("Hello World", "g");
var res = patt.constructor;

console.log(res);
*/




//  using IF IF checking and SINGLE RETURN
/*

let obj = {
    name: 'john',
    age: 13,
    origin: 'liverpool',
}

let obj1 = {
    name: 'ben',
    age: null,
    origin: 'liverpool',
}

function cek(arg) {
    let result;
    if (!arg) return result = false;
    if (typeof arg !== "object" ) return result = false;
    if (!arg.name || !arg.age ) return  result = 'please make sure the the information is complete';
    result = arg;
    // single return
    return result;
}

console.log(cek('hello'));
console.log(cek(obj));
console.log(cek(obj1));
=======
// var times = 5;
// while (times >= 0) {
//   console.log(times, "meow");
//   times --;
// }



// let a = 80;
// let count = 0;
// while (count <= 10) {
//     // count;
//     if (a%count  == 0) {
//       console.log(a%count);
//     } else {
//     console.log(count, a%count, 'no zero');
//   }
//   count++;
// }


/*
 * Buatlah sebuah program yang akan mencari sebuah string di dalam string.
 * String input akan terdapat pada variable input.
 * String yang dicari akan terdapat pada variable search.
 *
 * Output yang diharapkan dari program adalah:
 *   - true  : jika search terdapat dalam input
   - false : jika search tidak terdapat dalam input
>>>>>>> 6c2b66bbe09501f7b5ddab0402795a6d2407d445
*/


/*
<<<<<<< HEAD
function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}


function Bst() {
    this.root = null;
    this.add = add;
    this.find = find;
    this.inOrder = inOrder;
}

function show() {
    return this.data;
}

function add(data) {
    var n = new Node(data, null, null);
    // console.log('n', n)
    if (this.root == null) {
        this.root = n;
    } else {
        var current = this.root;
        console.log('current: ', current);
        var parent;
        while (true) {
            parent = current;
            
            if (data < current.data) {
                current = current.left;
                if (current == null) {
                    parent.left = n
                    console.log('parent left: ... ', parent.left);
                    break;
                }
            } else if(data > current.data) {
                current = current.right;
                if (current == null) {
                    parent.right = n
                    console.log('parent right: ...', parent.right);
                    break;
                }
            }
        }
    }
}

function find(data) {
    var current = this.root;
    while (current.data != data) {
        if (data < current.data) {
        current = current.left;
        } else {
            current = current.right;
        }
        if (current == null) {
            return null;
        }
    }
    return current;
}


// function inOrder(node) {
//     let arr = [];
//     if (!(node == null)) {
        
//         inOrder(node.left);
//         // console.log(node.show() + " ");
//         arr.push();
//         inOrder(node.right);
//     }
//     return arr;
// }



let bst = new Bst();
bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);
bst.add(23);
bst.add(21);
bst.add(29);
// console.log(bst.find(55));
console.log(inOrder(bst.root));

*/


/*
function oe(n) {
    
    if (n == 0) {
        return `even:  ${n}`;
    } else if (n == 1) {
        return  `odd:  ${n}`;
    } else {
        return oe(n-2);
    }
}

console.log(oe(334));
*/


/*
function rev(num, name) {
    let store = '';
    if (num == 0) {
        return ;
    } else {
        // console.log(rev(n-1), n);
        // console.log(name[num-1]);
        return rev(name[num-1]));
        
    }
    
}
    
let name = 'john';
let l = name.length;
console.log(rev(l, name));
*/

/*
const [head, ...tail] = [1,2,3,4];

console.log(head);
console.log(...tail);
*/

// let arr = ['ben', 'silva', 'sirene', 'rone', 'veny', 'brown', 'tono', 'john'];

/*
let arr= [2,3,4,5,55,3,2,12];
function findLar(arr) {

    let val;
    for (let i=0; i<arr.length-1; i++) {
        console.log('arr[i+1]: awal', arr[i+1]);
        console.log('\n');
        console.log(i, `${arr[i]}` ,' > ', `${arr[i+1]}`, `${ arr[i] > arr[i+1]}`);
        
        // val= arr[0]
        val = arr[i];
        if (val > arr[i+1]) {
            
            arr[i+1] = val;
            val = arr[i];// last assign

            console.log('\n');
            console.log('i next: ', i+1, 'val: ....', val)
            console.log('i next: ',i+1, 'arr[i+1]:.... ', arr[i+1]);
            
        }
    }
    return val
}

console.log(findLar(arr));
*/


/*
function sumRange(n) {
    let total = 0;
    for (let i=n; i>=0; i--) {
        console.log('total', total);
        total += i; // 3, 2, 1;
        
        console.log(i);
    }
    return total;
}


//4: 4 + 3 + 2 + 1;

function rec(n, compound=0) {
    if (n == 0) {
        return compound;
    }
    return rec(n-1, compound+n);
}

console.log(rec(4));
*/



/*
function find(arr, value) {
    let start = 0;
    let last = arr.length-1;
    let mid = Math.floor((last + start) / 2);

    while (arr[start] <= arr[last]) {
        

        if (value === arr[mid]) {
            return (`${arr[mid]} is at index of ${mid}`);
        } else  if (value < arr[mid]) {
            mid-=1;
        } else if (value > arr[mid]) {
            mid+=1;
        } else {;
            return -1;
        }
    }
    
}

console.log(find([1,2,3,4,5,6,7,8,9,10,11,12,13,14], 12));

*/



// find the highest value;


/*
let arr = [100, 6,4,3,23,45,2,1,56,23];

function larg(arr) {
    let temp;
    for (let i=0; i<arr.length-1; i++) {
        temp = arr[i];
        if (temp > arr[i+1]) {
            arr[i+1] = temp;
        }
        
    }
    return temp;
    
}

console.log(larg(arr))


*/






/*
// log2 X
// etc: log2 8 = 3 because 2 power 3 = 8;
// built in ca use => Math.log(8) / Math.log(2) ==> 3;

function tes(log, n) {
    let count = 0;
    while(log >= n) {  //  while( log >= n) PENTING BANGETT TO UNDERSTAND IN LOOP
        log /= n;
        count +=1
    }
    return count;
}
console.log('log2 8: ', tes(8, 2));
// algoritma dari log2 8 ???
// 8/2 = 4
// 4/2 = 2
// 2/2 = 1

*/


/*
function logs(log, n, count) {
    
    if( log == 1) {
        console.log('count last: ', count)
        return log + 1000;
    } else {
        console.log('count: ', count)
        console.log('tes: ', log)
        return log/logs(log/n, n, count+1)
    }
}


console.log(logs(16, 2, 0));
*/

//logx N = ?
// etc: log2 8 = 3 
function rec(log, n) {
  let count = 0;
  while(log >= n) {
    log /= n;
    count+=1
  }
  return count
}
// console.log('log3 243:', rec(243, 3));
// console.log('3**5: ', 3**5);




// selection sorting Jay Wengrow 5 april 2021
// with tracing 
function selectionSort(array) {
    for(var i = 0; i < array.length; i++) {
       var lowestNumberIndex = i;//1 j: 2
       for(var j = i + 1; j < array.length; j++) {
          if(array[j] < array[lowestNumberIndex]) {
                 lowestNumberIndex = j;
                 console.log('n: ', lowestNumberIndex);
          }
       }
    if(lowestNumberIndex != i) {
      console.log('if N: ', i);
       var temp = array[i];//5
       array[i] = array[lowestNumberIndex];// 2
       array[lowestNumberIndex] = temp;
      console.log('arr temp: ', array);
    }
  }
 return array;
}

// console.log(selectionSort([5,4,3,2]));






// find largest arr O(N)
function test(arr) {
  
  let val;
  for (let i=0; i<arr.length-1; i++) {
    console.log(' atas ... val > arr[i+1]', `${val} > ${arr[i+1]}`)
    val=arr[i]; // 4000000 > 5000000000
                    // 4000000 > 22223
    if (val > arr[i+1]) {
        //] val = 40000000
          // arr[i+1] = 22223
          console.log('b4 assign val', arr[i+1]);
      arr[i+1] = val; // val ini 500000000
          console.log('bawah.. ', arr[i+1]); // 50000000000
    }
  }
  return val;
}
   


let arr = [23,32,54,65,123,400000000, 222,345,12,36,44,67,23,111, 500000000000,22223, 60000000000000000000, 4557,44,58,10];

// console.log(test(arr));





// findlargest with Olog(N)

function findlargest(arr, value) {
  let start = 0;
  let last = arr.length-1;
  
  while (start <= last) {
    let mid = Math.floor((start+last)/2);
    if (value == arr[mid]) {
      return arr[mid];
    }
    if (value < arr[mid]) {
      mid -= 1;
      ;  
    } else if (value > arr[mid]) {
      
      mid +=1;
    }
    
  } 
  
  return -1;
}

console.log(sort([1,2,3,4,   5    ,6,7,12,16]), 12);






// EDITTED 5 APRIL 2021

// sorting ascending arr O(N);
function asc(arr) {
  let store;
  let swapped = true;
  while (swapped) {
    console.log('hello');
    for (let i=0; i<arr.length-1; i++) {
      if ( arr[i]> arr[i+1]) {
        while(arr[0] < arr[i+1]) { // looping 
         store = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = store;
 
        
        }
      }
    } 
    swapped = false;
  }
   
  return arr;
}

console.log(asc([5,4,3,2,1]));





// detect duplicate value with less efficient
let arr = [1,2,3,4,5,3];

for (let i=0; i<arr.length; i++) {
  for (let j=0; j<arr.length; j++) {
    if ( i!== j && arr[i]  === arr[j]) {
      console.log(` i: ${i}, j: ${j} same:  ${arr[i]} + ${arr[j]}: `, arr[i] + arr[j]);
    } 
  }
}


// detect duplicate value with better efficient
function hasDuplicate(arr) {
  let cek = [];
    for (let i=0; i<arr.length; i++) {
      if (cek[arr[i]] === undefined ) {
      cek[arr[i]] === 1;
    } else {
      return true;  
    }
    }
    return false;
}

console.log(hasDuplicate([2,3,4,5,2]));



function trial(n) {
  let swapped = true;
  let x = [];
 do {
   swapped = false;
   for (let i=0; i<n; i++) {
     if (i == 3) {
       x.push(i);
     } else if (i == 4) {
       x.push(i);
     }
   }
   swapped = true
   
 } while (swapped); 
 
 return x;
}



// trial using DO WHILE
function trial(n) {
  let swapped = true;
  let x = [];
 do {
   
   for (let i=0; i<n; i++) {
     if (i != 3) {
       x.push(i);
           swapped = false;
     }
   }
   
   
 } while (swapped); 
 
 return x;
}

console.log(trial(5));
 
 
 
 // bubble sort
 function asc(arr) {

  let swapped = true;
  let temp;
  do {
    swapped = false;
    for (let i=0; i<arr.length-1; i++) {
      if (arr[i] > arr[i+1]) {
      temp = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = temp;
      swapped = true;
    }
    }
  
  }while(swapped);
  return arr;
}

console.log(asc([5,4,3,2,1]));



// selection SORT;
function sorting(arr) {
  for (let i=0; i<arr.length; i++) {
    let lowestNumIndex = i;
    for (let j= i+1; j<arr.length; j++) {
      if(arr[j] < arr[lowestNumIndex]) {
        lowestNumIndex = j;
      }
    }
  
   if (lowestNumIndex != i) {
    let temp = arr[i];
    arr[i] = arr[lowestNumIndex];
    arr[lowestNumIndex] = temp;
   }
  } 
  return arr;
}

  console.log(sorting([5,4,6,7,8,9, 2,1]))
  
  // 5 APRIL 2021
  // TRACING SELECTION SORTING
  function sorting(arr) {
  let n = 0;
  let m = 0;
  for (let i=0; i<arr.length; i++) {
    let lowestNumIndex = i;
      //[5,4,6,7,8,9, 2,1]
      console.log('lowestNumIndex: ', lowestNumIndex);
    for (let j= i+1; j<arr.length; j++) {
      if(arr[j] < arr[lowestNumIndex]) {
        lowestNumIndex = j;                
      }
           n++;
              console.log('low j: ', lowestNumIndex);
              console.log(n, ': ', arr)
    }
  
   if (lowestNumIndex != i) {
       console.log(`lowes: ${lowestNumIndex} != i: ${i}`)
    let temp = arr[i];// 5, 6
    arr[i] = arr[lowestNumIndex]; // 1, 2
    arr[lowestNumIndex] = temp;
       m++;
       console.log('--', m)
       console.log('arr after: ', arr);
   }
  }
     
  return arr;
}

  console.log(sorting([5,4,6,7,8,9, 2,1]))
  
  
 // 7 APRIL SELECTION SORTING 
 function asc(arr) {
   let curr;
   let temp;
   for (let i=0; i<arr.length; i++) {
     curr = i;
     for (let j= i+1; j<arr.length; j++) {
       if (arr[curr] > arr[j]) {
         curr = j;
       }
     }
     
     if(curr != i) {
       temp = arr[i];
       arr[i] = arr[curr];
       arr[curr] = temp;
     }
   }
   return arr;
 }
  
 
 console.log(asc([5,4,3,2]));
 
/* 7 APRIL page 57 or 72 jay wengrow
CATATAN BIG O NOTATION:

In some case O(100N) wud be classiefied as O(N)
and O(N**2/2) wud be classified as O(N**2)

why?? it sounds like NEGLECTING the CONSTANT right??
that is because even in O(1000N) or O(2000N), there will be a point at which 
it wud be faster than O(N**2/2) or 
even faster than O(N**2);

this this because the reason at the previous paragraph

and REMEMBER! we shud always DIG or INSPECT the code deeper to get the
truth evaluation of the algorithm performance and time complexities
so we can avoid the biased GENERALIZATION of Big O Notation

*/
  
  



function tes(log, n) {
    let count = 0;
    while(log >= n) {
        log /= n;
        count +=1
    }
    return count;
}
console.log('log2 256: ', tes(256, 2));
// algoritma dari log2 8 ???
// 8/2 = 4
// 4/2 = 2
// 2/2 = 1
// 1/2 = 

// console.log('2 power 8: ', 2**8);



let x = Math.log(8)/ Math.log(2); // // log2 8;
let y = Math.log(256)/ Math.log(2); // // log2 256;
console.log(x, y);



// =======
var input = "Fisika SMA Terpadu Kelas XI";
var search = "SMA";
var inputIter='';
var searchIter='';

for (let i=0; i<search.length; i++) {
  for (let j=0; j<input.length; j++) {
    
    if (input[j] === ' ') {
      console.log(inputIter);
      
      inputIter;
    } else if (search[i] != 'SMA'){
      console.log(searchIter);
      searchIter;
      
      // console.log('nothing');
    } else {
      searchIter+=search[i];
      inputIter+=input[j];
      // console.log('last part');
    }
  }
}



//ternary




/*
let sentence = 'Help us understand how to make MDN better for beginners (5 minute survey)';
// let target = 'school';
let store = [];
let markToFilter = [' ', '(', ')'];
let filteringMark = markToFilter.every( e => (e == ' ' || e == '(' || ')') );
console.log(filteringMark);
let piece = '';

if (sentence) {
  for (let i=0; i<sentence.length; i++) {
    
    

    if (sentence[i] == ' ') {
      store.push(piece);
      console.log(piece);
      piece = ''
    } else if (sentence[i] != ' ' && sentence[i] != '(' && sentence[i] != ')'){ 
      // (sentence[i] != ' ' && sentence[i] != '(' && sentence[i] != ')')
      piece+=sentence[i];
    } 

    if (i == (sentence.length-1)) {
      store.push(piece);
      // console.log(piece);
    }
      
  }
}

console.log('so this is the array result: ', store);

*/


/*
state = { 
  counters : [
      {id: 1, value: 0},
      {id: 2, value: 0},
      {id: 3, value: 0},
      {id: 4, value: 0}
  ],
  anything: 'nice',
  anythingx: 'okay'
}

  /* Below is the way to  Increment
     state.counters.value
  /*

const clone = [...state.counters];
const index = clone.indexOf(0);
clone[0] = {id: 1, value: 0}
clone[1] = {id: 2, value: 0}
clone[0].value++
clone[1].value++
console.log(clone);
*/


/*  
  // ---- CHECK MAX LENGTH OF STRING IN ARRAY
  // ----- DONT DELETE
function findLongestWordLength(str) {
  let arr = str.split(' ');
  let pool = [];
 
  for (let i=0; i<arr.length; i++) {
    pool.push(arr[i].length);
  } 
  
  let max = pool.reduce( function (a, b) {
      return Math.max(a , b)
  })
  
  return max
  //return str.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");








/* 

 SOAL 17 april 2021;

 let's say, kamu punya array :  

[12345,12344,12334] 
 
hasil output yang diinginkan :  
 
[123**,123**,123**] 
*/


 let test =  [1234543345, 1234454346, 123344346634245];
 // test[i].length;
function rep(param) {

    return param.map( (n) => {

        // convert to string type;
        n = String(n);
        // potong array.substr(start)
        // tentukan panjang character dari starting point hingga akhir tiap element;
        // shg saat dipotong akan otomatis adjust the length sampe akhir
        let store = n.substr(3,n.length); // tail yg akan di replace
        console.log(store);
        
        // create asterisk based on how many length of tail character
        let addAsterisk = '*'
        // addition * based on long tail
        for (let i=0; i<store.length; i++) {
            addAsterisk+='*';
        }

        // using replace
        return n.replace(store,addAsterisk);
    });
        
}

console.log(rep(test));




