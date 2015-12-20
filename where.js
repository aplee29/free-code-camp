/*
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.

For example, where([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, where([20,3,5], 19) should return 2 because it is less than 20 (index 2) and greater than 5 (index 1).
*/

function where(arr, num) {
  
  arr.sort(function(a, b) { // First, sort arr elements in ascending order
    return a - b;
  });
  
  var arrInd = 0; // Initializes array index to 0
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < num) { // If array element is less than num
      arrInd++; // Increase array index by 1 and continue loop
    }
    else { // If array element is greater than or equal to num
      return arrInd; // Return the current array index 
    }
  }
  return arrInd; // If num exceeds any of the arr element values, return the last arrInd
}