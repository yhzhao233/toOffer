function ListNode(x){
    this.val = x;
    this.next = null;
}

function Merge(pHead1, pHead2)
{
    if (pHead1 === null) {
        return pHead2;
    }
    if (pHead2 === null) {
        return pHead1;
    }
    var newHead = null;
    if (pHead1.val < pHead2.val) {
        newHead = pHead1;
        pHead1 = pHead1.next;
    } else {
        newHead = pHead2;
        pHead2 = pHead2.next;
    }
    var first = newHead;
    while (pHead1 !== null && pHead2 !== null) {
        if (pHead1.val < pHead2.val) {
            newHead.next = pHead1;
            newHead = newHead.next;
            pHead1 = pHead1.next;
        } else {
            newHead.next = pHead2;
            newHead = newHead.next;
            pHead2 = pHead2.next;
        }
    }
    if (pHead1 === null) {
        newHead.next = pHead2;
    }

    if (pHead2 === null) {
        newHead.next = pHead1;
    }
    return first;
}