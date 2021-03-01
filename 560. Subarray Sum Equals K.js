var subarraySum = function (nums, k) {
  let map = new Map();
  map.set(0, 1);
  let sum = 0;
  let count = 0;
  for (let num of nums) {
    sum += num;
    count += map.has(sum - k) ? map.get(sum - k) : 0;
    map.set(sum, (map.has(sum) ? map.get(sum) : 0) + 1);
  }

  return count;
};
