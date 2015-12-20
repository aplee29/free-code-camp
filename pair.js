/*
The DNA strand is missing the pairing element. 
Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/

function pair(str) {
  var arr = str.split(""); // Converts str to array
  var superArr = [];
  var arrLength = arr.length; // Since arr itself will change upon each iteration, we must assign arr length to a variable 
  
  for (var i = 0; i < arrLength; i++) {
    var subArr = []; // Records DNA pair; clears subArr upon each iteration
    subArr.push(arr[0]); // Pushes the first element of arr to subArr
    
    if (arr[0] == 'A') {
      subArr.push('T');
    }
    else if (arr[0] == 'T') {
      subArr.push('A');
    }
    else if (arr[0] == 'C') {
      subArr.push('G');
    }
    else {
      subArr.push('C');
    }
    superArr.push(subArr); // Pushes subArr pair to superArr
    arr.shift(); // Removes first element of arr
  }
  return superArr; // Returns matching pair results 
}