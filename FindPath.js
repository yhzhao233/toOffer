//34、二叉树中和为某一值的路径
//思路：从根节点开始打印，则选用前序遍历方法，每到一个节点保存该节点，若不满足条件则删除并回溯

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}


function FindPath(root, exp) {
    if (root === null) {
        return;
    }

    let path = [];
    let curSum = 0;
    let finalPath = [];
    FindThePath(root, exp, path, curSum, finalPath);
    finalPath = finalPath.map((v) => v.join('->'));
    for (let i = 0; i < finalPath.length; i++) {
        console.log(finalPath[i]);
    }
}

function FindThePath(root, exp, path, curSum, finalPath) {

    curSum += root.val;
    path.push(root.val);

    let isLeaf = root.left === null && root.right === null;
    if (curSum === exp && isLeaf) {
        let curPath = [];
        for (let k of path) {
            curPath.push(k);
        }
        finalPath.push(curPath);
    }

    if (root.left !== null) {
        FindThePath(root.left, exp, path, curSum, finalPath);
    }
    if (root.right !== null) {
        FindThePath(root.right, exp, path, curSum, finalPath);
    }
    path.pop();
}


//测试
var root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(12);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(7);

FindPath(root, 22)