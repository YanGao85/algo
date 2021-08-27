const gridTraveler = (n, m) => {
  if (n === 0 || m === 0) return 0;
  if (n === 1 && m === 1) return 1;
  return gridTraveler(n - 1, m) + gridTraveler(n, m - 1);
};

// time: O(2^n+m)
// space: O(n + m)

// Memoization

const gridTravelerMemo = (n, m, memo = {}) => {
  const key = `${n},${m}`;
  if (key in memo) return memo[key];
  if (n === 0 || m === 0) return 0;
  if (n === 1 && m === 1) return 1;
  memo[key] =
    gridTravelerMemo(n - 1, m, memo) + gridTravelerMemo(n, m - 1, memo);
  return memo[key];
};

// time: O(n * m)
// space: 0(n + m)

console.log(gridTravelerMemo(1, 1));
console.log(gridTravelerMemo(2, 3));
console.log(gridTravelerMemo(3, 2));
console.log(gridTravelerMemo(3, 3));
console.log(gridTravelerMemo(18, 18));
