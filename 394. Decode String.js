var decodeString = function (s) {
  var findSubString = function (s, start) {
    let stack = new Array();
    stack.push(s.charAt(start++));
    while (stack.length !== 0) {
      if (s.charAt(start) === "]") {
        stack.pop();
      } else if (s.charAt(start) === "[") {
        stack.push("[");
      }
      start++;
    }

    return start;
  };

  var decode = function (s, start, end) {
    let result = "";
    let current = start;
    while (current <= end) {
      let c = s.charAt(current);
      while (c >= "0" && c <= "9") {
        current++;
        c = s.charAt(current);
      }
      if (current === start) {
        result += s.charAt(current++);
      } else {
        let count = s.substring(start, current);
        let end = findSubString(s, current);
        result += decode(s, current + 1, end - 2).repeat(count);
        current = end;
      }
      start = current;
    }

    return result;
  };

  return decode(s, 0, s.length - 1);
};
