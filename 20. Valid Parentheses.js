var isValid = function(s) {
    let pair = new Map();
    pair.set(')', '(');
    pair.set(']', '[');
    pair.set('}', '{');

    let stack = new Array();

    for (let c of s) {
        if ([')', ']', '}'].includes(c)) {
            if (stack.length === 0 || stack[stack.length - 1] !== pair.get(c)) {
                return false;
            }
            stack.pop();
        } else {
            stack.push(c);
        }
    }

    return stack.length === 0;
};
