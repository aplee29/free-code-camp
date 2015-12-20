/*
Write a function that takes two or more arrays and returns a new array of unique values in the order 
of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but 
with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted 
in numerical order.
*/

function unite(arr1, arr2, arr3, arr4) {
  var newArr = [];
  // Combine arr arguments into one big args array while retaining original subarrays
  var args = Array.prototype.slice.call(arguments);
  
  // Push all elements of arr1 into newArr
  for (var i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i]);
  }
  
  // Removes arr1 from args array
  args.shift();
  
  // Depending on number of subarrays and elements in each subarray, find and push unique elements into newArr
  for (var n = 0; n < args.length; n++) {
    for (var j = 0; j < args[n].length; j++) {
      if (arr1.indexOf(args[n][j]) === -1) {
        newArr.push(args[n][j]);
      }
    }
  }
  return newArr;
}