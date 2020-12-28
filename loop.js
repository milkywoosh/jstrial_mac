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


var input = "Bagong pergi mencari jus jeruk"

if (input) {
  let toDisplay = ' ';
  for (let i=0; i<=input.length; i++) {
    
    if (input[i] === '') {
      console.log(toDisplay);
      toDisplay = '';
  } else {
    toDisplay+=input[i];
  }

    if (i === (input.length)-1) {
      console.log(toDisplay)
    }
  
  }
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