//1. Create a function that will find the factorial number of [9] using recursion.
var factorial = 1;
for (var i = 1; i <= 9; i++) {
  factorial = factorial * i;
}
console.log(factorial);

//2
let array = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];

let max = 0;

function maxNumber(array) {
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      maxNumber(array[i]);
    } else {
      if (array[i] > max) {
        max = array[i];
      }
    }
  }
}
maxNumber(array);
console.log(max);
