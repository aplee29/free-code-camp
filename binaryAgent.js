/*
Return an English translated sentence of the passed binary string.

The binary string will be space separated.
*/

function binaryAgent(str) {
  // Split binary string into array
  var arr = str.split(" ");
  var convertedStr = "";
  
  // Helper function that converts binary value to decimal number
  function binToNum(binVal) {
    // Base Case
    if (binVal === '') {
      return 0;
    }
    // If last digit is '1', use recursion on rest of binary string, excluding last digit
    else if (binVal.slice(-1) === '1') {
      return 2 * binToNum(binVal.slice(0, -1)) + 1;
    }
    // If last digit is '0', use recursion on rest of binary string, excluding last digit
    else {
      return 2 * binToNum(binVal.slice(0, -1)) + 0;
    }
  }
  
  for (var i = 0; i < arr.length; i++) {
    // For each element, find the decimal equivalent of binary string
    // Next, convert decimal number into letter form
    // Finally, add letter to final convertedStr
    convertedStr += String.fromCharCode(binToNum(arr[i]));
  }
  return convertedStr;
}