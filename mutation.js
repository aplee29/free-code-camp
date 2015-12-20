/*
Return true if the string in the first element of the array contains all of the letters of the string 
in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are 
present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
*/

function mutation(arr) {
  var firstWord = arr[0].toLowerCase(); // Converts first arr element to lowercase before assigning it to firstWord  
  var secondWord = arr[1].toLowerCase(); // Converts second arr element to lowercase before assigning it to secondWord
  
  for (var i = 0; i < secondWord.length; i++) {
    if (firstWord.indexOf(secondWord[i]) == -1) { // If any letter in secondWord does not exist in firstWord, return false
      return false;
    }
    else { // Otherwise, skip to the next iteration
      continue;
    }
  }
  return true; // If all letters in secondWord are present in firstWord, return true
}