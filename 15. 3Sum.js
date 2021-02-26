var threeSum = function (nums) {
  let result = new Array();
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; ++i) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = nums[left] + nums[right];
      if (sum === -nums[i]) {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        while (left < right && nums[left] === nums[left - 1]) left++;
        while (left < right && nums[right] === nums[right + 1]) right--;
      } else if (sum < -nums[i]) {
        left++;
      } else {
        right--;
      }
    }
    while (i < nums.length - 2 && nums[i] == nums[i + 1]) ++i;
  }

  return result;
};
