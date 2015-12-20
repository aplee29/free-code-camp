/*
We'll pass you an array of two numbers. 
Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.
*/

function sumAll(arr) {
  var newArr = [];
  for (var i = Math.min(...arr); i <= Math.max(...arr); i++) {
    newArr.push(i); // Create new array with min & max values, and all values in between
  }
  
  var total = newArr.reduce(function(a,b) {
    return a + b;
  });
  return total; // Sums up all values in newArr and returns total value
}