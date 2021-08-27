const canConstruct = (target, arr) => {
  if (target === '') return true;

  for (let elem of arr) {
    if (target.indexOf(elem) === 0) {
      if (canConstruct(target.slice(elem.length), arr) === true) return true;
    }
  }
  return false;
};

//Brute Force

//m = target.length
//n = arr.length

//time O(n^m*m)
//space O(m^2)

// console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
// console.log(
//   canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
// );
// console.log(
//   canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])
// );
// console.log(
//   canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
//     'e',
//     'ee',
//     'eee',
//     'eeee',
//     'eeeee',
//     'eeeeee',
//   ])
// );

const canConstructMemo = (target, arr, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === '') return true;
  for (let elem of arr) {
    if (target.indexOf(elem) === 0) {
      if (canConstructMemo(target.slice(elem.length), arr, memo) === true) {
        memo[target] = true;
        return true;
      }
    }
  }
  memo[target] = false;
  return false;
};

//Memo

//m = target.length
//n = arr.length

//time O(m*m^2)
//space O(m^2)

console.log(canConstructMemo('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(
  canConstructMemo('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
);
console.log(
  canConstructMemo('enterapotentpot', [
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
  canConstructMemo('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee',
  ])
);
