//52.找到两个单向链表的第一个公共节点
//思路：分别遍历，得到两个链表的长度，根据长度差让较长链表先走，然后两者同时走，找到第一个相同节点就是目标节点


function ListNode(val) {
    this.val = val;
    this.next = null;
}

function FindFirstCommonNode(head1, head2) {
    let length1 = getListLength(head1);
    let length2 = getListLength(head2);

    let dif = Math.abs(length1 - length2);
    let headLong = null;
    let headShort = null;
    if (length1 > length2) {
        headLong = head1;
        headShort = head2;
    } else {
        headLong = head2;
        headShort = head1;
    }

    for (let i = 0; i < dif; i++) {
        headLong = headLong.next;
    }

    while (headLong !== null && headShort !== null && headLong !== headShort) {
        headLong = headLong.next;
        headShort = headShort.next;
    }

    let firstCommonNode = headLong;

    return firstCommonNode;

}

function getListLength(head) {
    let length = 0;
    let node = head;
    while (node !== null) {
        length++;
        node = node.next;
    }

    return length;
}