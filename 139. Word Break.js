var wordBreak = function (s, wordDict) {
  return dfs(s, 0, wordDict, new Map());
};

var dfs = function (s, current, wordDict, memo) {
  if (memo.has(current)) return memo.get(current);
  if (current === s.length) return true;

  for (let i = current; i < s.length; ++i) {
    let word = s.substring(current, i + 1);
    if (wordDict.includes(word) && dfs(s, i + 1, wordDict, memo)) {
      return true;
    }
  }

  memo.set(current, false);

  return false;
};
