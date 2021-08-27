const bestSum = (targetSum, numbers) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  let shortestSum = null;
  for (let num of numbers) {
    const remainder = targetSum - num;
    const result = bestSum(remainder, numbers);
    if (result !== null) {
      const combination = [...result, num];
      if (shortestSum === null || combination.length < shortestSum.length)
        shortestSum = combination;
    }
  }
  return shortestSum;
};
// m = target sum
// n = array length

// time O(n^m * m)
// space 0(m^2)

// console.log(bestSum(7, [2, 3]));
// console.log(bestSum(7, [5, 3, 4, 7]));
// console.log(bestSum(7, [2, 4]));
// console.log(bestSum(8, [2, 3, 5]));
// console.log(bestSum(300, [7, 14]));
// console.log(bestSum(100, [1, 2, 5, 25]));

// Memoization
const bestSumMemo = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  let shortestSum = null;
  for (let num of numbers) {
    const remainder = targetSum - num;
    const result = bestSumMemo(remainder, numbers, memo);
    if (result !== null) {
      const combination = [...result, num];
      if (shortestSum === null || combination.length < shortestSum.length)
        shortestSum = combination;
    }
  }
  memo[targetSum] = shortestSum;
  return shortestSum;
};
console.log(bestSumMemo(100, [1, 2, 5]));

// m = target sum
// n = array length

// time O(n*m^2)
// space 0(m^2)
