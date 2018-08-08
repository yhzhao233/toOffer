//27，二叉树镜像翻转
//思路：遍历树，只要节点有子节点，交换位置，最后得到的就是镜像树

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function Mirror(root) {
    // write code here
    if (root === null) {
        return;
    }

    if (root.left === null && root.right === null) {
        return;
    }
    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    if (root.left) {
        Mirror(root.left);
    }
    if (root.right) {
        Mirror(root.right);
    }
}