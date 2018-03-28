function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function HasSubtree(pRoot1, pRoot2)
{
    // write code here
    var result = false;
    //依题只有当两棵树都不为空时 B 可能是 A 的子树
    if (pRoot1 !== null && pRoot2 !== null) {
        //若两节点相同，判断B是否为A的子树
        if (pRoot1.val === pRoot2.val) {
            result = TreeBinTreeA(pRoot1, pRoot2);
        }
        //若不是判断B是否为A的左子树
        if (!result) {
            result = TreeBinTreeA(pRoot1.left, pRoot2);
        }
        //若不是判断B是否为B的右子树
        if (!result) {
            result = TreeBinTreeA(pRoot1.right, pRoot2);
        }
    }
    return result;
}

function TreeBinTreeA(pRoot1, pRoot2) {
    //若节点2为空，B树取完，B为A子树
    if (pRoot2 === null) {
        return true;
    }
    //若节点1为空，A树取完，B不是A的子树
    if (pRoot1 === null) {
        return false;
    }
    //若两节点不等，B不是A的子树
    if (pRoot1.val !== pRoot2.val) {
        return false;
    }
    //两节点相同时，判断左右节点是否一致
    return TreeBinTreeA(pRoot1.left, pRoot2.left) && TreeBinTreeA(pRoot1.right, pRoot2.right);
}