var letterCombinations = function (digits) {
  const map = new Map([
    ["2", "abc"],
    ["3", "def"],
    ["4", "ghi"],
    ["5", "jkl"],
    ["6", "mno"],
    ["7", "pqrs"],
    ["8", "tuv"],
    ["9", "wxyz"],
  ]);

  let result = new Array();
  let dfs = function (digits, current, solution, result) {
    if (current === digits.length) {
      if (solution.length > 0) {
        result.push(solution);
      }
      return;
    }
    for (let letter of map.get(digits.charAt(current))) {
      dfs(digits, current + 1, solution + letter, result);
    }
  };

  dfs(digits, 0, "", result);

  return result;
};
