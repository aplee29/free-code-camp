/*
Returns a new array with all falsy values removed.

Falsy values in javascript are false, null, 0, "", undefined, and NaN.
*/

function bouncer(arr) {
  
  function isFalsy(elem) {
    return Boolean(elem) !== false; // Return only those elements that are NOT falsy / evaluate to true
  }
  
  return arr.filter(isFalsy); // Filter out all elements that fail the isFalsy test and returns updated array
}