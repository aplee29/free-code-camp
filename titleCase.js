/*
Return the provided string with the first letter of each word capitalized. 
Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

function titleCase(str) {
  str = str.split(""); // Converts str to array divided by letter/character
  
  for (var i = 0; i < str.length; i++) {
    if (i === 0) {
      str[0] = str[0].toUpperCase();
    } 
    else if (str[i] == " ") {
      str[i+1] = str[i+1].toUpperCase(); // If the current element is a space, capitalize the following letter
    }
    else if (i !== 0 && str[i-1] !== " ") { // Converts all other letters to lowercase
      str[i] =  str[i].toLowerCase();
    }
  }   
  return str.join("");
}