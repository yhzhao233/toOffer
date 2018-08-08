function ListNode(val){
    this.val = val;
    this.next = null;
}

function printListFromTailToHead(head)
{
    var arr = [];
    var point = head;
    while (point) {
        arr.push(point.val);
        point = point.next;
    }
    return arr.reverse();
}