//8

function BinaryTreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.parent = null;
}

function getNext(pNode) {
    if (pNode === null) {
        return pNode;
    }

    let pNext = null;
    if (pNode.right !== null) {
        let pRight = pNode.right;
        while (pRight.left !== null) {
            pRight = pRight.left;
        }
        pNext = pRight;
    } else if (pNode.parent !== null) {
        let pCur = pNode;
        let pParent = pNode.parent;
        while (pParent !== null && pCur === pParent.right) {
            pCur = pParent;
            pParent = pParent.parent;
        }
        pNext = pParent;
    }
    return pNext;
}