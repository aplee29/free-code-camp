/*
Repeat a given string (first argument) n times (second argument). 

Return an empty string if n is a negative number.
*/

function repeat(str, num) {
  if (num < 0) { // If num is negative, return empty string
    return "";
  }
  else { // If num is positive
    var newStr = "";
    for (var i = 0; i < num; i++) {
      newStr += str; // Concatenates str to newStr num times
    }
    return newStr;
  }
}