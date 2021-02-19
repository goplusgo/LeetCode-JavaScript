var productExceptSelf = function (nums) {
  let rightProducts = new Array();
  rightProducts.push(1);
  for (let i = nums.length - 1; i > 0; --i) {
    let product = rightProducts[rightProducts.length - 1] * nums[i];
    rightProducts.push(product);
  }

  let products = new Array();
  let product = 1;
  for (let i = 0; i < nums.length; ++i) {
    products.push(product * rightProducts[rightProducts.length - 1]);
    rightProducts.pop();
    product *= nums[i];
  }

  return products;
};
