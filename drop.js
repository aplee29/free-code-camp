/*
Drop the elements of an array (first argument), starting from the front, 
until the predicate (second argument) returns true.
*/

function drop(arr, func) {
  return arr.filter(func); // Filter out elements that do not pass test func
}

console.log(drop([1, 2, 3], function(n) {return n < 3; }));
console.log(drop([1, 2, 3, 4], function(n) {return n >= 3;}));
console.log(drop([1, 2, 3], function(n) {return n > 0; }));
console.log(drop([1, 2, 3, 4], function(n) {return n > 5;}) );
console.log(drop([1, 2, 3, 7, 4], function(n) {return n > 3}));