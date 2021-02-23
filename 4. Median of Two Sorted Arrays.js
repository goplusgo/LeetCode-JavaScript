var findMedianSortedArrays = function (nums1, nums2) {
  let nums = nums1.concat(nums2);
  nums.sort((a, b) => a - b);
  if (nums.length % 2 === 0) {
    return (nums[nums.length / 2] + nums[nums.length / 2 - 1]) / 2;
  }

  return nums[parseInt(nums.length / 2)];
};
