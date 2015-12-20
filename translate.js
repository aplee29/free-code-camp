/*
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, 
moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.
*/

function translate(str) {
  // If the first letter is a vowel, add "way" to the end
  if (str.charCodeAt(0) == 97 || str.charCodeAt(0) == 101 || str.charCodeAt(0) == 105 || str.charCodeAt(0) == 111 || str.charCodeAt(0) == 117) {
    return str + "way";
  }
  // If the first letter or cluster is a consonant, move them to the end and add "ay"
  else {
    var vowelInd = 0;
    
    for (var i = 0; i < str.length; i++) {
      // Checks to see if letter is a vowel. Once found, index is assigned to vowelInd and the loop ends
      if (str.charCodeAt(i) == 97 || str.charCodeAt(i) == 101 || str.charCodeAt(i) == 105 || str.charCodeAt(i) == 111 || str.charCodeAt(i) == 117) {
        vowelInd = i;
        break;
      }
    }
    return str.slice(vowelInd) + str.slice(0, vowelInd) + "ay";       
  }
}