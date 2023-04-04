// Leetcode challenge 1

// Sum of a 1-D array

const runningSum = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    console.log("Nums array before iteration:", nums);
    nums[i] += nums[i - 1];
    console.log("Nums array after iteration:", nums);
  }
  return nums;
};
console.log(runningSum([1, 2, 3, 4, 5]));

/* Explanation:
For this challenge, I iterated through unknown length of 1-D array. To ensure the sum starts correctly, I skipped the first element and initiated the loop at 1. The loop then iterates through, add the current element to the sum of the previous element. 
 
1. For loop to iterate through each element in array for length of array. 
2. Add current element to sum of previous element(s)
3. Initiate loop at array[1]
4. Each loop should look like 
  (currentElement += previousSum)
  (First loop: 2 + 1 = 3)
  (Second Loop: 3 + 3 = 6)
  (Third Loop: 6 + 4 = 10)
  (Fourth Loop: 10 + 5 = 15)
*/
