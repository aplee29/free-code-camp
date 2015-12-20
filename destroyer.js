/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 

Remove all elements from the initial array that are of the same value as these arguments.

Hint: Use Arguments object
*/

function destroyer(arr) {
  
  function noRepeats(value) {
    return args.indexOf(value) === -1; // Only returns values in initial array that are different from argument values 
  }
  
  var args = Array.prototype.slice.call(arguments); // Converts initial array + arguments into one large array
  args.splice(0, 1); // Mutates args array by removing initial array; args = argument values
  return arr.filter(noRepeats); // Filters out repeated values and returns new arr
}