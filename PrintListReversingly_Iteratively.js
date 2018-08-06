//从尾到头打印链表，后进先出，用栈


function ListNode(val) {
    this.val = val;
    this.next = null;
}

function PrintListReversingly_Iteratively(head) {
    if (head === null) {
        return [];
    }
    let arr = [];
    while (head !== null) {
        head = head.next;
        arr.push(head.val);
    }

    let str = '';
    while (arr !== []) {
        str += arr.pop();
    }

    return str;
}