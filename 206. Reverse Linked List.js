var reverseList = function (head) {
  let dummy = new ListNode(-1, null);
  while (head != null) {
    let next = head.next;
    head.next = dummy.next;
    dummy.next = head;
    head = next;
  }

  return dummy.next;
};
