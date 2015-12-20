/*
Check if a string (first argument) ends with the given target string (second argument).
*/

function end(str, target) {  
  if (str.indexOf(" ") == -1) { // If str is only one word; in other words, has no space
    if (str.substr(-1,1) == target) { // If the last letter of str matches target letter
      return true;
    }
    else { // If the last letter of str does not match target letter
      return false;
    }
  }
  else { // If str has more than one word
    var lastWord = str.split(" ").slice(-1).join(""); // Save the last word of str to lastWord
    
    if (lastWord == target) { // If lastWord matches target word
      return true;
    }
    else if (lastWord.substr(lastWord.indexOf(target), target.length) == target) { // Find the occurrence of target word within lastWord, even though the two words do not match exactly
      return true;
    }
    else { // Return false if previous cases are not met
      return false;
    }
  }
}