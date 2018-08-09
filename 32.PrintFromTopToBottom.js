//32、从上到下打印二叉树
//思路：打印一个节点时，如果该节点有子节点，则将其放入队列，然后从头部取出最早放入队列的节点，重复操作


function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function PrintFromTopToBottom(root) {
    if (!root) {
        return;
    }
    let str = [];
    let deque = [];
    deque.push(root);
    while (deque.length !== 0) {
        let pNode = a.shift();
        str.push(pNode);

        if (pNode.left) {
            deque.push(pNode.left);
        }
        if (pNode.right) {
            deque.push(pNode.right);
        }
    }
    str = str.join(',');
    console.log(str);
}