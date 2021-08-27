const fib = (num) => {
  if (num <= 2) return 1;
  return fib(num - 1) + fib(num - 2);
};

// time: O(2^n)
// space: O(n)

// Memoization

const fibmemo = (num, memo = {}) => {
  if (num in memo) return memo[num];
  if (num <= 2) return 1;
  memo[num] = fib(num - 1, memo) + fib(num - 2, memo);
  return memo[num];
};

// time: O(n)
// space: O(n)

console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
console.log(fib(50));
