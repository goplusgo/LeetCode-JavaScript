var rightSideView = function(root) {
    let result = new Array();

    dfs(root, 0, result);

    return result;
};

var dfs = function(root, depth, result) {
    if (root == null) return;

    if (result.length < depth + 1) {
        result.push(root.val);
    }

    dfs(root.right, depth + 1, result);
    dfs(root.left, depth + 1, result);
}
