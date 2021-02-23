let arr = [1,2,3,4,5];

let found = function (bool) {
    let value = 10;
    if (arr.find( e => e < 10) == bool) {
        return `all the element is bigger than ${value}`
    } else {
        return 'nope';
    }
}

console.log(found(true));