function ListNode(x){
    this.val = x;
    this.next = null;
}
function FindKthToTail(head, k)
{
    // write code here
    if (head === null || k <= 0){
        return null;
    }
    var node = head;
    var arr = [];
    while (node !== null) {
        arr.push(node);
        node = node.next;
    }
    return arr[arr.length - k];
}