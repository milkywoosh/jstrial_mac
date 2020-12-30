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


<<<<<<< HEAD
// var input = "Bagong pergi mencari jus jeruk"

// if (input) {
//   let toDisplay = ' ';
//   for (let i=0; i<=input.length; i++) {
    
//     if (input[i] === '') {
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
=======
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
>>>>>>> f1bb9454f16f0e996243bbfecdc178576dd13888

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


/**
 * Buatlah sebuah program yang akan mencari sebuah string di dalam string.
 * String input akan terdapat pada variable input.
 * String yang dicari akan terdapat pada variable search.
 *
 * Output yang diharapkan dari program adalah:
 *   - true  : jika search terdapat dalam input
 *   - false : jika search tidak terdapat dalam input
 */

// var input = "Fisika SMA Terpadu Kelas XI";
// var search = "SMA";
// var inputIter='';
// var searchIter='';

// for (let i=0; i<search.length; i++) {
//   for (let j=0; j<input.length; j++) {
    
//     if (input[j] === ' ') {
//       console.log(inputIter);
      
//       inputIter;
//     } else if (search[i] != 'SMA'){
//       console.log(searchIter);
//       searchIter;
      
//       // console.log('nothing');
//     } else {
//       searchIter+=search[i];
//       inputIter+=input[j];
//       // console.log('last part');
//     }
//   }
// }

var cek = "the things inside";
var n = cek.includes("things");
console.log(n)