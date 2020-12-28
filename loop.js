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