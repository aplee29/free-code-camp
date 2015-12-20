/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWord(str) {
  str = str.split(" "); // Splits str into array separated by word
  
  var max = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i].length > max) {
      max = str[i].length;
    }
  }
  return max;
}