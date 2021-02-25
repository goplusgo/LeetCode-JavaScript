var maxSlidingWindow = function (nums, k) {
  let result = new Array();
  let window = new Array();
  for (let i = 0; i < nums.length; ++i) {
    while (window.length > 0 && nums[i] >= nums[window[window.length - 1]]) {
      window.pop();
    }
    window.push(i);
    if (i - window[0] >= k) {
      window.shift();
    }
    if (i >= k - 1) {
      result.push(nums[window[0]]);
    }
  }

  return result;
};
