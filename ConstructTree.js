//7、根据前序遍历结果和中序遍历结果构建二叉树
//确定左右子树的数量，划分左右子树

function BinaryTreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}


function construct(preorder, inorder, length) {
    if (preorder === null || inorder === null || length <= 0) {
        return null;
    }
    let pattern = /Array/;
    if (!pattern.test(Object.prototype.toString.call(preorder)) || !pattern.test(Object.prototype.toString.call(inorder))) {
        return null;
    }

    let startPre = 0;
    let startIn = 0;
    let endPre = preorder.length - 1;
    let endIn = inorder.length - 1;

    return constructCore(startPre, endPre, startIn, endIn, preorder, inorder);
}

function constructCore(startPre, endPre, startIn, endIn, preorder, inorder) {
    let root = new BinaryTreeNode(preorder[startPre]);

    if (startPre === endPre) {
        if (startIn === endIn && preorder[startPre] === inorder[startIn]) {
            return root;
        } else {
            throw "Invalid input";
        }
    }

    let rootIn = startIn;
    while (rootIn <= endIn && inorder[rootIn] !== root.val) {
        rootIn++;
    }

    if (rootIn === endIn && inorder[rootIn] !== root.val) {
        throw "Invalid input";
    }

    let leftLen = rootIn - startIn;
    let leftPreEnd = startPre + leftLen;
    if (leftLen > 0) {
        root.left = constructCore(startPre + 1, leftPreEnd, startIn, rootIn - 1, preorder, inorder);
    }
    if (leftLen < endPre - startPre) {
        root.right = constructCore(leftPreEnd + 1, endPre, rootIn + 1, endIn, preorder, inorder);
    }
    return root;
}

var a = construct([1,2,4,7,3,5,6,8],[4,7,2,1,5,3,8,6],8);