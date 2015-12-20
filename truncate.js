/*
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 

Return the truncated string with a "..." ending.

Note that the three dots at the end add to the string length.

If the length of the string is less than or equal to 3 characters, 
then the length of the three dots is not added to the string length.
*/

function truncate(str, num) {
  if (str.length <= 3) { // If str's length is less than or equal to 3 characters
    return str.slice(0, num) + "..."; // Add three dots to str slice; length of 3 dots is not added to str length
  }
  else if (str.length <= num) { // If the str's length is, at most, equal to num
    return str; // Return str without truncating or adding dots 
  }
  else { // If str is longer than num
    return str.slice(0, num-3) + "..."; // Return str slice up to num-3 and concatenate 3 dots; total length of str slice adds up to num
  }
}