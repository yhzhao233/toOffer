//36、二叉搜索树转双向链表
//思路：因为二叉搜索树是有序的，要求双向链表有序，则采用中序遍历
//节点指向左子节点的指针变为指向链表前一个节点的指针
//节点指向右子节点的指针变为指向链表后一个节点的指针

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function Convert(Troot) {
    let pLastNodeInList = null;
    ConvertNode(Troot, pLastNodeInList);
    let pHeadOfList = pLastNodeInList;
    while (pHeadOfList !== null && pHeadOfList.left !== null) {
        pHeadOfList = pHeadOfList.left;
    }

    return pHeadOfList;


    function ConvertNode(node) {
        if (node === null) {
            return;
        }

        let curNode = node;
        if (curNode.left !== null) {
            ConvertNode(curNode.left, pLastNodeInList);
        }
        curNode.left = pLastNodeInList;
        if (pLastNodeInList !== null) {
            pLastNodeInList.right = curNode;
        }

        pLastNodeInList = curNode;
        if (curNode.right !== null) {
            ConvertNode(curNode.right, pLastNodeInList);
        }
    }
}


var root = new TreeNode(10);
root.left = new TreeNode(6);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(8);
root.right = new TreeNode(14);
root.right.left = new TreeNode(12);
root.right.right = new TreeNode(16);

var head = Convert(root);