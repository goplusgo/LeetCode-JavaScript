var invertTree = function(root) {
    if (root === null) return null;

    let left = invertTree(root.right);
    let right = invertTree(root.left);

    root.left = left;
    root.right = right;

    return root;
};
