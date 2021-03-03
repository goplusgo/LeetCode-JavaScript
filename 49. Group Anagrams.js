var groupAnagrams = function (strs) {
  let map = {};
  for (let str of strs) {
    let key = str.split("").sort().join("");
    if (!map[key]) {
      map[key] = [];
    }
    map[key].push(str);
  }

  return Object.values(map);
};
