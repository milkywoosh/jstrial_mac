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





