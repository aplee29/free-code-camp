/*
Sum all the prime numbers up to and including the provided number.

A prime number is defined as having only two divisors, 1 and itself. 
For example, 2 is a prime number because it's only divisible by 1 and 2. 
1 isn't a prime number, because it's only divisible by itself.

The provided number may not be a prime.
*/

function sumPrimes(num) {
  var totalPrime = 0;
  
  // Helper function: returns true if value is prime, false if not
  function isPrime(val) {
    for (var i = val-1; i > 1; i--) {
      // If value is evenly divisible by another number other than itself or 1, it is not prime
      if (val % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  // Skip j = 1 because we know 1 is not a prime number
  for (var j = 2; j <= num; j++) {
    // If value returns true for isPrime, add to total
    if (isPrime(j)) {
      totalPrime += j;
    }
  }
  return totalPrime;
}