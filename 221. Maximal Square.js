var maximalSquare = function (matrix) {
  let maxVal = 0;
  let dp = new Array(matrix.length + 1)
    .fill(null)
    .map(() => new Array(matrix[0].length + 1).fill(0));

  for (let i = 1; i <= matrix.length; ++i) {
    for (let j = 1; j <= matrix[i - 1].length; ++j) {
      if (matrix[i - 1][j - 1] === "1") {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
        maxVal = Math.max(maxVal, dp[i][j] * dp[i][j]);
      }
    }
  }

  return maxVal;
};
