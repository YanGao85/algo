const howSum = (targetSum, numbers) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  for (let num of numbers) {
    const remainder = targetSum - num;
    const result = howSum(remainder, numbers);
    if (result !== null) return [...result, num];
  }
  return null;
};
// m = target sum
// n = array length

// time O(n^m * m)
// space 0(m)

// console.log(howSum(7, [2, 3]));
// console.log(howSum(7, [5, 3, 4, 7]));
// console.log(howSum(7, [2, 4]));
// console.log(howSum(8, [2, 3, 5]));
// console.log(howSum(300, [7, 14]));

// Memoization
const howSumMemo = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  for (let num of numbers) {
    const remainder = targetSum - num;
    const result = howSumMemo(remainder, numbers, memo);
    if (result !== null) {
      memo[targetSum] = [...result, num];
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return null;
};

console.log(howSumMemo(7, [2, 3]));
console.log(howSumMemo(7, [5, 3, 4, 7]));
console.log(howSumMemo(7, [2, 4]));
console.log(howSumMemo(8, [2, 3, 5]));
console.log(howSumMemo(300, [7, 14]));

// m = target sum
// n = array length

// time O(n*m^2)
// space 0(m^2)
