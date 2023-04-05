/*
1672. Richest Customer Wealth
Given an m x n integer grid accounts where accounts[i][j] is the amount of money the ith customer has in the jth bank. Return the wealth that the richest customer has. 
- A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth. 

Constraints:
m == accounts.length
n == accounts[i].length
1 <= m, n <= 50
1 <= accounts[i][j] <= 100
*/

// Sum up each customers accounts, hold in new variable
// Loop through customer variables to evaluate for greatest number

let accounts = [
  [7, 1, 3],
  [2, 8, 7],
  [1, 9, 5],
];

function bankAccountSum() {
  let largestWealth = 0;
  accounts.forEach(function (customer) {
    let currentCustomerWealth = 0;
    //console.log(customer);
    customer.forEach(function (banks) {
      console.log();
      currentCustomerWealth += banks;
    });
    console.log(
      "Customer:",
      customer,
      "->",
      "currentCustomerWealth:",
      currentCustomerWealth
    );
    largestWealth = Math.max(largestWealth, currentCustomerWealth);
  });

  return largestWealth;
}

console.log(bankAccountSum(accounts));

/*
Solution: 
1. First initialized a variable to hold the largest sum of the arrays - largestWealth
2. Utilized a forEach loop, that loops through an array and creates a var for each iteration (customer) within the callback function and holds the current customer's sum. 
3. Then I used another forEach loop to search through each customer's banks, to sum up their individual bank values
4. Lastly, I used the Math.max evaluator to compare the value of largestWealth to currentCustomerWealth within the outer forEach loop, so that it compared each array's sum to that of the largestWealth value and then returned the largestWealth value. 


forEach loop -> this method passes a callback function for each element of an array together with the following parameters: 
  - current value
  - index (optional)
  - array (optional)

  1. The callback function (or anon func) must take at least one parameter which represents the elements of the array. 

  es6 style for above challenge = accounts.forEach(customer => console.log(customer))
*/
