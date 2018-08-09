//35、负责链表的复制
//思路：第一步：复制链表除了sibling部分，将复制的每个节点链接在原节点后
//第二步：因为在原节点后，所以（复制节点的sibling）指向的是（（原节点的sibling指向的节点）的后一个节点）
//第三步：将复制的节点分离出来构成复制链表

function ComplexListNode(val) {
    this.val = val;
    this.next = null;
    this.sibling = null;
}

function CloneNodes(head) {
    let node = head;
    while (node !== null) {
        let clone = new ComplexListNode(node.val);
        clone.next = node.next;
        node.next = clone;
        node = clone.next;
    }
}

function ConnectSiblingNodes(head) {
    let node = head;

    while (node !== null) {
        let clone = node.next;
        if (node.sibling !== null) {
            clone.sibling = node.sibling.next;
        }

        node = clone.next;
    }
}

function ReConnectNodes(head) {
    let node = head;
    let ClonedHead = null;
    let ClonedNode = null;
    if (node !== null) {
        ClonedHead = ClonedNode = node.next;
        node.next = ClonedNode.next;
        node = node.next;
    }
    while (node !== null) {
        ClonedNode.next = node.next;
        ClonedNode = ClonedNode.next;
        node.next = ClonedNode.next;
        node = node.next;
    }

    return ClonedHead;
}

function ComplexListNodeClone(head) {
    CloneNodes(head);
    ConnectSiblingNodes(head);
    return ReConnectNodes(head);
}