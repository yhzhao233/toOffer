function ListNode(x) {
    this.val = x;
    this.next = null;
}

function ReverseList(pHead) {
    if (pHead === null) {
        return null;
    }

    let pReversedHead =null;
    let cur = pHead;
    let pre = null;

    while (cur !== null) {
        let pNext = cur.next;
        if (pNext === null) {
            pReversedHead = cur;
        }
        cur.next = pre;
        pre = cur;
        cur = pNext;
    }

    return pReversedHead;
}