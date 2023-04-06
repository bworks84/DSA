/*
Fizzbuzz challenge - Given an integer n, return a string array answer (1-indexed) where:
answer[i] == "FizzBuzz" if i is divisible by 3 and 5. 
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true. 
*/

// function fizzBuzz(n) {
//   let arr = [];
//   for (let i = 1; i <= n; i++) {
//     if ([i] % 3 == 0 && [i] % 5 === 0) {
//       arr.push("FizzBuzz");
//     } else if ([i] % 3 === 0) {
//       arr.push("Fizz");
//     } else if ([i] % 5 === 0) {
//       arr.push("Buzz");
//     } else arr.push(String(i));
//   }
//   return arr;
// }

// console.log(fizzBuzz(3));

/* 
1342. Number of steps to Reduce a Number to zero

Given an integer num, return the number of steps to reduce it to zero. In one step, 
if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it. 

1. for loop to iterate through number
2. var to keep track of steps each iteration and each case
3. Case for reaching zero and returning the number of steps without add + 1

*/

function reduceToZero(num) {
  let steps = 0;
  for (let i = num; i >= 0; i--) {
    if (num === 0) {
      return steps;
    } else if (num % 2 === 0) {
      console.log(
        "step",
        steps,
        ":",
        num,
        "is even; divide by 2 and obtain:",
        num / 2
      );
      num = num / 2;
      steps++;
    } else if (num % 2 === 1) {
      console.log(
        "step",
        steps,
        ":",
        num,
        "is odd; subtract 1 and obtain ",
        num - 1
      );
      num = num - 1;
      steps++;
    }
  }
}

console.log(reduceToZero(14));
