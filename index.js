
function hasTargetSum(array, target) {
  // Write your algorithm here
  for(i=0; i<array.length; i++){

    for (j=1; j<array.length; j++){

      if (array[i] + array[j] === target){

        console.log(`${array[i]},${array[j]}`)

        return true;
      } 
    }
  }

}
hasTargetSum([3, 8, 12, 4, 11, 7], 10);
/* 
  Write the Big O time complexity of your function here

  1. Both first and second iteration have n steps
  2. O(n²) => quadratic time
*/

/* 
  Add your pseudocode here

  1. Iterate through the array in two step.
  2. Checking if an elements from the first and second iteration whose sum equal the target parameter.
  3. Return true and log the two element , else return false.
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
