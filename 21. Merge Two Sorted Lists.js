var mergeTwoLists = function (l1, l2) {
  let dummy = new ListNode(-1, null);
  let current = dummy;
  while (l1 != null && l2 != null) {
    if (l1.val >= l2.val) {
      current.next = l2;
      l2 = l2.next;
    } else {
      current.next = l1;
      l1 = l1.next;
    }
    current = current.next;
  }
  current.next = l1 == null ? l2 : l1;

  return dummy.next;
};
