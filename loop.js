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
*/


/*
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

*/

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

*/


/*

let numArray = [3,2,45,3,1];

let result = Math.max.apply(null, numArray);

function getMaxArray( arg ) {
    
    return arg.reduce((a,b) => {
         return Math.max(a, b);
    });
    
}

console.log(getMaxArray(numArray));

*/



// DONT DELETE: FIND THE LONGEST STRING IN SENTENCE;
/*

function findLongestWordLength(str) {
  let store=[];
  let valueLength = 0;
  // join the string by separating sentence with " ";
  for (let i=0; i<str.length; i+=1) {
      if (str[i] != " ") {
        valueLength+= 1;
        store.push(valueLength);
      } else {
        valueLength=0;
      }
      
  }

  let strLong = store.reduce( function ( a, b) {
    return Math.max(a,b);
  })
  
  return strLong;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

*/


// EXERCISE HACKTIV8
/*
function largestPair(arr) {
  let subarr = [];
  arr = String(arr);
  let value;
  for (let i=0; i<arr.length; i++) {
    if (i<arr.length-1) {
      // console.log(i);
      // console.log(arr[i])
      // console.log(arr[i+1])
      value = Number(arr[i]+ arr[i+1]);
      subarr.push(value);
    }
  }
  let val;
  for (let j=0; j<subarr.length; j++) {
   val = subarr[j]
    if (val > subarr[j+1]) {
      subarr[j+1] = val;
    }
  }
  return val;
}
console.log(largestPair(641523479284234373));

*/
// ascending
/*
function sort(arr) {

  let store;
  let swapped = true;
  while (swapped) {
    for (let i=0; i<arr.length-1; i++) {
        while (arr[i] > arr[i+1]) {
            if (arr[i] > arr[i+1]) {
              store = arr[i];
              arr[i] = arr[i+1];
              arr[i+1] = store;
              swapped = true;
            } 
        } 
    }
  }
  
  return arr;
  
}
console.log(sort([5,4,3,2,1]));
*/



/*
function sort(arr) {

  let swapped = true;
  let store;
  do { 
    console.log('before false')
    swapped = false;
      for (let i=0; i<arr.length-1; i++) {

        if (arr[i] > arr[i+1]) {
          store = arr[i];
          arr[i] = arr[i+1];
          arr[i+1] = store;
          console.log(arr);
          swapped = true;
          // console.log('after true inside if loop')

          
        }
      }
      
     
  } while (swapped);
  return arr;
}

console.log(sort([5,4,3,2,1]))
*/



/*
function tes() {
  let x = 0;
  do {
    x++;
  } while (x < 5)
  return x
}

console.log(tes());
*/




/* belum berhasil jalan !!!
function asc(arr) {
  let store;
  let swapped = true;
  while (swapped) {
    console.log('hello');
    for (let i=0; i<arr.length-1; i++) {
      while(arr[0] < arr[i+1]) {
        if ( arr[i]> arr[i+1]) { // looping 
        store = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = store;
 
        
        }
      }
    } 

  }
   
  return arr;
}

console.log(asc([5,4,3,2,1]));
*/

// checking duplicate element from Jay wengrow book
// is there any duplicate in array??
/*
function test(arr) {
    var existN =[];
    let step = 0;
    for (var i=0; i<arr.length; i++) {
      step+=1;
      // console.log(existN[ arr[i] ]); // existN[ 7 ]
      if(existN[ arr[i] ] === undefined) {
        // console.log(existN[ arr[i] ], 'teerrrss'); // existN[ 7 ]
        existN[ arr[i] ] = 1;
      } else {
        return true;
      }
    }
    console.log(step);
    return false;
}

console.log(test([7,6, 5, 7]));
*/



// penjelasan pada function diatas ini,
// yg mana array dapat memiliki value 'empty' jk diprint akan muncul 'undefined';
/*
let arr = []; // [ <1 empty item>, 1, <1 empty item>, 1 ]
arr[1] = 1;
arr[3] = 1;

console.log(arr);
*/







let objCoresys = [
    {
        "tracking_id": "419862027",
        "rowstate_name": "ENTRI VERIFIED",
        "pod_status_name": null,
        "tracking_doc_no": "CGK8056427900024",
        "reference_no": "110521019201000507",
        "create_date": "2021-05-11 20:38:20",
        "counter_name": "KANTOR PUSAT",
        "user_inp": "CGK_YOGA",
        "description": "kk_maybank_1105_susulan.xls",
        "origin": "JAKARTA",
        "destination": "CILANDAK",
        "receiver_name": "JOSEPHINE SUKMADEWI KARJAD",
        "koli": "1",
        "kilo": "1",
        "packing_cost": "0",
        "surcharge_cost": "0",
        "insurance_cost": "0",
        "rowstate": "3",
        "pod_receiver_name": "",
        "pod_relation_name": "",
        "latitude": null,
        "longitude": null,
        "pod_type": null,
        "awb_no": "CGK8056427900024"
    },
    {
        "tracking_id": "419939504",
        "rowstate_name": "MANIFEST OUTGOING",
        "pod_status_name": null,
        "tracking_doc_no": "CMOCGK0002856642",
        "reference_no": "110521019201000507",
        "create_date": "2021-05-11 23:20:21",
        "counter_name": "KANTOR PUSAT",
        "user_inp": "CGK_GIYANTO",
        "description": "SB 80564279",
        "origin": "JAKARTA",
        "destination": "CILANDAK",
        "receiver_name": "JOSEPHINE SUKMADEWI KARJAD",
        "koli": "1",
        "kilo": "1",
        "packing_cost": "0",
        "surcharge_cost": "0",
        "insurance_cost": "0",
        "rowstate": "4",
        "pod_receiver_name": "",
        "pod_relation_name": "",
        "latitude": null,
        "longitude": null,
        "pod_type": null,
        "awb_no": "CGK8056427900024"
    },
    {
        "tracking_id": "421289328",
        "rowstate_name": "INCOMING",
        "pod_status_name": null,
        "tracking_doc_no": "CMIJSB0001791624",
        "reference_no": "110521019201000507",
        "create_date": "2021-05-17 08:08:12",
        "counter_name": "KANTOR CABANG JAKARTA SELATAN B",
        "user_inp": "JSB_RIDWAN",
        "description": null,
        "origin": "JAKARTA",
        "destination": "CILANDAK",
        "receiver_name": "JOSEPHINE SUKMADEWI KARJAD",
        "koli": "1",
        "kilo": "1",
        "packing_cost": "0",
        "surcharge_cost": "0",
        "insurance_cost": "0",
        "rowstate": "7",
        "pod_receiver_name": "",
        "pod_relation_name": "",
        "latitude": null,
        "longitude": null,
        "pod_type": null,
        "awb_no": "CGK8056427900024"
    },
    {
        "tracking_id": "421366544",
        "rowstate_name": "DELIVERY ",
        "pod_status_name": null,
        "tracking_doc_no": "DRSJSB0005460343",
        "reference_no": "110521019201000507",
        "create_date": "2021-05-17 09:35:00",
        "counter_name": "KANTOR CABANG JAKARTA SELATAN B",
        "user_inp": "JSB_RIDWAN",
        "description": "KURIR: MUJIANTO KET: [ KURIR : KOTA ]  ",
        "origin": "JAKARTA",
        "destination": "CILANDAK",
        "receiver_name": "JOSEPHINE SUKMADEWI KARJAD",
        "koli": "1",
        "kilo": "1",
        "packing_cost": "0",
        "surcharge_cost": "0",
        "insurance_cost": "0",
        "rowstate": "8",
        "pod_receiver_name": "",
        "pod_relation_name": "",
        "latitude": null,
        "longitude": null,
        "pod_type": null,
        "awb_no": "CGK8056427900024"
    },
    {
        "tracking_id": "421542234",
        "rowstate_name": "POD - DELIVERED",
        "pod_status_name": "DITERIMA OLEH",
        "tracking_doc_no": "DRSJSB0005460343",
        "reference_no": "110521019201000507",
        "create_date": "2021-05-17 15:21:39",
        "counter_name": "KANTOR CABANG JAKARTA SELATAN B",
        "user_inp": "JSBM107200930",
        "description": "[KURIR: MUJIANTO] [PENERIMA: ELSA] [HUB: RECEPTIONIST / SEKRETARIS] [STATUS: DELIVERED - DL - DITERIMA OLEH] - KETERANGAN: OK",
        "origin": "JAKARTA",
        "destination": "CILANDAK",
        "receiver_name": "JOSEPHINE SUKMADEWI KARJAD",
        "koli": "1",
        "kilo": "1",
        "packing_cost": "0",
        "surcharge_cost": "0",
        "insurance_cost": "0",
        "rowstate": "9",
        "pod_receiver_name": "ELSA",
        "pod_relation_name": "RECEPTIONIST / SEKRETARIS",
        "latitude": "-6.2266289",
        "longitude": "106.8114228",
        "pod_type": "2",
        "awb_no": "CGK8056427900024",
        "pod_photo": "https://client.coresyssap.com/photo/pod/CGK8056427900024",
        "pod_camera": "https://client.coresyssap.com/photo/pod_camera/CGK8056427900024",
        "pod_signature": "https://client.coresyssap.com/photo/pod_signature/CGK8056427900024"
    }
];


/*
function listReceiver(arr, keys) {
    let store = [];
    let recname = Object.keys(arr).filter( (e) => { e ===  keys });
    store.push(...recname);
    return store;
}
// console.log(listReceiver(objCoresys, 'receiver_name'))
*/

/*
function interObjKeys(arr) {
  let store = new Array();
  let i;
  for ( i=0; i<arr.length; i++ ) {
      store.push(Object.keys(arr[i]));
  }

  return store;
}
*/

// console.log(interObjKeys(objCoresys));


/*
let identity = {
                  'name': 'ben',
                  'age' : 12,
                }

let addId = {
              'id': 22003,
            }
// add new properties to indentity object
Object.assign(identity, addId);
console.log(identity);

console.log(Object.values(identity));
*/


/*
function powerNo(n, m) {
    // if (m == 0)
    //     return 1;

    if (m == 1 || m == 0)
        return 1; // last final return? maybe;
    console.log('tess', n, m, powerNo(n, m - 1));
    return n * powerNo(n, m - 1);//3-2: 9, 3-1: 27, 3-0: 27
}

console.log(powerNo(4, 2));
*/


// usage of Unary Opertator to operate Math calculation
// source: Binar Academy Chpter Silver: Operator
/*
let a = "1";
let b = "2";

console.log(+a + +b); // result: 3 as a number
console.log(a+b); // result: "12"


let x = true;
console.log(+x); // result: 1

let y = false;
console.log(y); // result: 0

let z = "";
console.log(+z) // result: 0

let q = null;
console.log(+q);  // result:0

let w = undefined;
console.log(+w);  // result: NaN

let nan = NaN;
console.log(+nan);  // result: NaN

console.log(0 * 1);


// INCREMENT/ DECREMENT 
// PREFIX  dan  POSTFIX
let tes = 1;
let cek = ++tes
console.log(tes);
console.log(cek);
// console.log(tes++);

let a1 = 1;
// console.log(a1); // 1
let b1 = 1;
// console.log(b1); // 1
let c1 = ++a1;
// console.log(c1); // 2
let d1 = b1++;
// console.log(d1); // 1

console.log(a1, b1, c1, d1); // 2,2,2,1

let v = (1+2, 3+4, 1+1);
console.log("v: ", v); // result: 2, bcs 1+1 is at the last


let value_test = 1;
do {
  
  console.log(value_test);
  value_test++;

} while (value_test <= 5);
*/

// ========================== GIT PUSH ORIGIN_MAC ============================



