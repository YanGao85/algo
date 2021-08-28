const allConstruct = (target, arr) => {
  if (target === '') return [[]];

  let result = [];
  for (let elem of arr) {
    if (target.indexOf(elem) === 0) {
      const suffix = target.slice(elem.length);
      const suffixWays = allConstruct(suffix, arr);
      const targetWays = suffixWays.map((way) => [elem, ...way]);
      result.push(...targetWays);
    }
  }
  return result;
};

//   Brute Force

//   m = target.length
//   n = arr.length

//   time O(n^m)
//   space O(m^2)
console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(
  allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
);
console.log(
  allConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])
);
console.log(
  allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee',
  ])
);

const allConstructMemo = (target, arr, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === '') return [[]];

  let result = [];
  for (let elem of arr) {
    if (target.indexOf(elem) === 0) {
      const suffix = target.slice(elem.length);
      const suffixWays = allConstructMemo(suffix, arr, memo);
      const targetWays = suffixWays.map((way) => [elem, ...way]);
      result.push(...targetWays);
    }
  }
  memo[target] = result;
  return result;
};
