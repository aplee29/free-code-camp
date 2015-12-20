/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
  var firstAscii = str.charCodeAt(0); // Assigns ASCII code of first letter to variable
  var missingElem; // Default is undefined
  
  // Starting from second letter onward, checks to see if string is consecutive
  // Otherwise, assigns missing letter to missingElem and exits loop
  for (var i = 1; i < str.length; i++) {
    if (str.charCodeAt(i) != firstAscii + i) {
      missingElem = String.fromCharCode(str.charCodeAt(i)-1);
      break;
    }
  }
  return missingElem;
}