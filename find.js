/*
Create a function that looks through an array (first argument) 
and returns the first element in the array that passes a truth test (second argument).
*/

function find(arr, func) {
  return arr.filter(func)[0]; // Return first value that passes test implemented by given function
}

console.log(find([1, 2, 3, 4], function(num){ return num % 2 === 0; }));
console.log(find([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));
console.log(find([1, 3, 5, 9], function(num) { return num % 2 === 0; }));