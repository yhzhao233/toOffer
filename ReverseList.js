function ListNode(x){
    this.val = x;
    this.next = null;
}
function ReverseList(pHead)
{
    if (pHead === null) {
        return null;
    }
    var now = pHead;
    var pre = null;
    var temp = null;
    while (now) {
        temp = now.next;
        now.next = pre;
        pre = now;
        now = temp;
    }
    return pre;
}