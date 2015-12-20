/*
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

Remember, you can access object properties through either dot notation or [] notation.
*/

function every(collection, pre) {
  // Iterate through each object of array 'collection'
  for (var i = 0; i < collection.length; i++) {
    // If object does not contain specified property 'pre', return false 
    if (!collection[i].hasOwnProperty(pre)) {
      return false;
    }
    // If object's value is not valid entry, return false
    if (collection[i][pre] === undefined || collection[i][pre] === "" || isNaN(collection[i][pre]) && typeof collection[i][pre] !== "string" || collection[i][pre] === null || collection[i][pre] === 0) {
      return false;
    }
  }
  // Otherwise, predicate is true on all elements of collection
  return true;
}