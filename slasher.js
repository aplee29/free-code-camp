/*
Return the remaining elements of an array after chopping off n elements from the head.

The head means the beginning of the array, or the zeroth index
*/

function slasher(arr, howMany) {
  if (arr.length < howMany) { // If howMany elements to chop off exceeds the number of arr elements, return []
    return [];
  }
  else {
    arr.splice(0, howMany); // From index 0, remove howMany number of elements from arr
    return arr; // Return arr containing deleted elements
  }
}