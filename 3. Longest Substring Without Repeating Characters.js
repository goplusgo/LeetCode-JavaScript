var lengthOfLongestSubstring = function (s) {
  let map = new Map();
  let maxLen = 0;
  let left = -1;
  for (let i = 0; i < s.length; ++i) {
    let c = s.charAt(i);
    if (map.has(c)) {
      left = Math.max(left, map.get(c));
    }
    maxLen = Math.max(maxLen, i - left);
    map.set(c, i);
  }

  return maxLen;
};
