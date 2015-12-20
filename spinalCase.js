/*
Convert a string to spinal case. 
Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
  var arr = str.split(" ");
  var newStr = "";

  for (var i = 0; i < str.length; i++) {
    // If each word is separated by space 
    if (str[i] === " ") {
      // Replace each space with a dash and convert to lowercase
      str = str.replace(/ /g,"-").toLowerCase();
      return str;
    }
    // Or, if each word is separated by underscore
    else if (str[i] === "_") {
      // Replace each underscore with a dash
      str = str.replace(/[_]/g,"-").toLowerCase();
      return str;
    }
    // Otherwise, if there is no space or other symbol dividing each word
    else if (arr.length === 1) {
      // Add a dash in front of each uppercase letter, and concatenate them to newStr
      if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
        newStr += "-" + str[i];
      }
      // Otherwise, concatenate lowercase letter to newStr
      else {
        newStr += str[i];
      }
    }
  }
  return newStr.toLowerCase();   
}