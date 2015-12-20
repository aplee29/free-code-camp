/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it. 
For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
*/

function myReplace(str, before, after) {
  // If the first letter of 'before' is uppercase, change the first letter of 'after' to uppercase  
  if (before.charCodeAt(0) >= 65 && before.charCodeAt(0) <= 90) {
    after = after[0].toUpperCase() + after.slice(1);
  }
  // If the first letter of 'before' is lowercase, change the first letter of 'after' to lowercase
  else {
    after = after[0].toLowerCase() + after.slice(1);
  }
  
  // Convert str to an array, separated by each word
  var arr = str.split(" ");
  
  // Iterate through each word, and if there is a match, replace the 'before' element with 'after'
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === before) {
      arr[i] = after;
    }
  }
  // Convert array back to str
  str = arr.join(" ");
  return str;
}