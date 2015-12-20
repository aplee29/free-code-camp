/*
Write a function that splits an array (first argument) into groups the length of size (second argument) 
and returns them as a multidimensional array.
*/

function chunk(arr, size) {
  var finalArr = [];
  
  while (arr.length > 0) { // While there are elements remaining in arr
    var subArr = []; // Resets subArr upon each iteration
    for (var i = 0; i < size && arr.length > 0; i++) {
      subArr.push(arr.shift()); // Pushes to subArr the first removed element of arr
    }
    finalArr.push(subArr); // Pushes subArr to finalArr
  }
  return finalArr;
}