var maxSubArray = function (nums) {
  let maxSum = nums[0];
  let sum = 0;
  for (let i = 0; i < nums.length; ++i) {
    sum += nums[i];
    maxSum = Math.max(maxSum, sum);
    sum = Math.max(sum, 0);
  }

  return maxSum;
};
