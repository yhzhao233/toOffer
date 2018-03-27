function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function reConstructBinaryTree(pre, vin)
{
    var node;
    if (pre.length === 1) {
        node = {
            val : pre[0],
            left : null,
            right : null
        }
    } else if (pre.length > 1) {
        var root= pre[0];
        var index = vin.indexOf(root);
        var vinLeft = vin.slice(0,index);
        var vinRight = vin.slice(index + 1);
        pre = pre.slice(1);
        var preLeft = pre.slice(0, vinLeft.length);
        var preRight = pre.slice(vinLeft.length);
        node = {
            val : root,
            left: reConstructBinaryTree(preLeft, vinLeft),
            right: reConstructBinaryTree(preRight, vinRight)
        }
    }
    return node;
}