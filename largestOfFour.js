/*
Return an array consisting of the largest number from each provided sub-array. 

For simplicity, the provided array will contain exactly 4 sub-arrays.
*/

function largestOfFour(arr) {
  var maxArr = [];
  
  for (var i = 0; i < arr.length; i++) { // Iterates through each sub-array
    var max = 0; // Clears max count upon each outer iteration
    
    for (var j = 0; j < arr[i].length; j++) { // Iterates through each element of sub-array
      if (arr[i][j] > max) {
        max = arr[i][j];
      }
    }
    maxArr.push(max); // Pushes the max value of each sub-array into maxArr
  }
  return maxArr;
}