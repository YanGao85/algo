const countConstruct = (target, arr) => {
  if (target === '') return 1;
  let totalCount = 0;
  for (let elem of arr) {
    if (target.indexOf(elem) === 0) {
      const ways = countConstruct(target.slice(elem.length), arr);
      totalCount += ways;
    }
  }
  return totalCount;
};

//   Brute Force

//   m = target.length
//   n = arr.length

//   time O(n^m*m)
//   space O(m^2)
// console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
// console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
// console.log(
//   countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
// );
// console.log(
//   countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])
// );
// console.log(
//   countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
//     'e',
//     'ee',
//     'eee',
//     'eeee',
//     'eeeee',
//     'eeeeee',
//   ])
// );

const countConstructMemo = (target, arr, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === '') return 1;
  let totalCount = 0;
  for (let elem of arr) {
    if (target.indexOf(elem) === 0) {
      const ways = countConstructMemo(target.slice(elem.length), arr, memo);
      totalCount += ways;
    }
  }
  memo[target] = totalCount;
  return totalCount;
};

//   Brute Force

//   m = target.length
//   n = arr.length

//time O(m*m^2)
//space O(m^2)
console.log(countConstructMemo('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log(countConstructMemo('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(
  countConstructMemo('skateboard', [
    'bo',
    'rd',
    'ate',
    't',
    'ska',
    'sk',
    'boar',
  ])
);
console.log(
  countConstructMemo('enterapotentpot', [
    'a',
    'p',
    'ent',
    'enter',
    'ot',
    'o',
    't',
  ])
);
console.log(
  countConstructMemo('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee',
  ])
);
