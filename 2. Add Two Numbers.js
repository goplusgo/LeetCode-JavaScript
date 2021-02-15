var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(-1, null);
    let current = dummy;
    let carry = 0;
    while(l1 !== null || l2 !== null) {
        let n1 = (l1 === null) ? 0 : l1.val;
        let n2 = (l2 === null) ? 0 : l2.val;
        current.next = new ListNode((n1 + n2 + carry) % 10, null);
        current = current.next;
        carry = (n1 + n2 + carry >= 10) ? 1 : 0;
        l1 = l1 === null ? null : l1.next;
        l2 = l2 === null ? null : l2.next;
    }

    if (carry === 1) {
        current.next = new ListNode(1, null);
    }

    return dummy.next;
};
