//22, 输出链表倒数第k个节点
//思路：只遍历一次，用两个指针，先将前一个指针移动 k-1 次，两个指针之间相隔k个
//再将两个指针同时向后移动，前一指针到尾节点时，后一个指针到倒数第k个节点
//考虑输入节点指针为 null，k <= 0及 k 比链表节点个数大的情况


function ListNode(x) {
    this.val = x;
    this.next = null;
}
function findKthToTail(head, k) {

    if (head === null || k <= 0){
        return null;
    }
    let pAhead = head;
    let pBehind = null;

    for (let i = 0; i < k - 1; i++) {
        if (pAhead.next !== null) {
            pAhead = pAhead.next;
        } else {
            return null;
        }
    }

    pBehind = head;

    while (pAhead.next !== null) {
        pAhead = pAhead.next;
        pBehind = pBehind.next;
    }

    return pBehind;

}