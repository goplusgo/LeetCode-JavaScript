var generateParenthesis = function (n) {
  let generate = function (left, right, s, result) {
    if (right === 0) {
      result.push(s);
    }

    if (left > 0) {
      generate(left - 1, right, s + "(", result);
    }
    if (right > left) {
      generate(left, right - 1, s + ")", result);
    }
  };

  let result = new Array();
  generate(n, n, "", result);

  return result;
};
