/*
Compare two arrays and return a new array with any items only found in one of the original arrays.
*/

function diff(arr1, arr2) {
  var newArr = [];
  
  for (var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) { // If an element of arr1 does not exist in arr2
      newArr.push(arr1[i]); // Push element to newArr
    }
  }
  
  for (var j = 0; j < arr2.length; j++) {
    if (arr1.indexOf(arr2[j]) === -1) { // If an element of arr2 does not exist in arr1
      newArr.push(arr2[j]); // Push element to newArr
    }
  }
  return newArr;
}