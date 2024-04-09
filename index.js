
  // Write your algorithm here
  function hasTargetSum(arr, target) {
    // Create an empty set to store the seen numbers
    const seen = new Set();

    // Iterate through the array
    for (let num of arr) {
        // Calculate the complement needed to achieve the target sum
        const complement = target - num;
        
        // If the complement is in the set, a pair with the target sum is found
        if (seen.has(complement)) {
            return true;
        }
        
        // Add the current number to the set
        seen.add(num);
    }
    
    // If no pair with the target sum is found, return false
    return false;
}

// Example usage:
console.log(hasTargetSum([1, 2, 3, 4, 5], 7)); // Output: true (because 3 + 4 = 7)
console.log(hasTargetSum([1, 2, 3, 4, 5], 10)); // Output: false (no pair sums up to 10)



/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
