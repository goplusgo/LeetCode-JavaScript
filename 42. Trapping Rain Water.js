var trap = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxVal = 0;
  let maxLeft = 0;
  let maxRight = 0;

  while (left <= right) {
    if (maxLeft < maxRight) {
      maxLeft = Math.max(maxLeft, height[left]);
      maxVal += maxLeft - height[left++];
    } else {
      maxRight = Math.max(maxRight, height[right]);
      maxVal += maxRight - height[right--];
    }
  }

  return maxVal;
};
