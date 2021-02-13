var mergeKLists = function(lists) {
    let result = new Array();

    var add = function(node) {
        while (node != null) {
            result.push(node);
            next = node.next;
            node.next = null;
            node = next;
        }
    }

    lists.forEach(add);

    if (result.length !== 0) {
        result.sort((a, b) => a.val - b.val);
        result.reduce((a, b) => a.next = b);
    }

    return result.length === 0 ? null : result[0];
};
