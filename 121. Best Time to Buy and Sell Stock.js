var maxProfit = function (prices) {
  let minPrice = prices[0];
  let maxVal = 0;
  for (let i = 1; i < prices.length; ++i) {
    maxVal = Math.max(maxVal, prices[i] - minPrice);
    minPrice = Math.min(minPrice, prices[i]);
  }

  return maxVal;
};
