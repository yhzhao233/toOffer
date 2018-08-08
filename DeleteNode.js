//18 在O(1)时间删除链表节点
//思路：把下一个节点复制到前一个，然后删除下一个节点
//若节点不在链表中仍为 O(n)

function ListNode(val){
    this.val = val;
    this.next = null;
}

function DeleteNode(head, deleted) {
    if (!head || !deleted) {
        return;
    }

    //删除节点非尾节点
    if (deleted.next !== null) {
        let pNext = new ListNode(0);
        pNext = deleted.next;
        deleted.val = pNext.val;
        deleted.next = pNext.next;

        pNext = null;
    }
    //只有一个节点
    else if (head === deleted) {
        head = null;
        deleted = null;
    }
    //删尾节点
    else {
        let pNode = new ListNode(0);
        pNode = head;
        while (pNode.next !== deleted) {
            pNode = pNode.next;
        }

        pNode.next = null;
        deleted = null;
    }

}