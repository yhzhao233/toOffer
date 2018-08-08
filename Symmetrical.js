//28、判断二叉树是否对称
//思路：比较前序遍历和其对称的遍历方法

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function isSymmetrical(root) {
    return Symmetrical(root, root)
}

function Symmetrical(root1, root2) {
    if (root1 === null && root2 === null) {
        return true;
    }
    if (root1 === null || root2 === null) {
        return false;
    }
    if (root1.val !== root2.val) {
        return false;
    }

    return Symmetrical(root1.left, root2.right)
        && Symmetrical(root1.right, root2.left);
}

