/*
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

You'll need to remove punctuation and turn everything lower case in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
*/

function palindrome(str) {
  str = str.replace(/[^a-zA-Z0-9]/g,"").toLowerCase(); // Replaces all non-letters and non-numbers with "", then converts str to lowercase
  
  if (str === "") {
    return true;
  }
  else {
    if (str[0] == str.slice(-1)) {
      return palindrome(str.slice(1, -1));
    }
    else {
      return false;
    }
  }
}