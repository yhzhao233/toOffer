//33、判断数组是否是二叉搜索树的后序遍历序列
//思路：后序遍历序列最后一个数为根节点的值，则之前小于其的部分属于左子树，大于其的抚慰属于右子树
//此外还要判断结构是否错误，右子树中是否有小于根节点的值

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}


function VerifySquenceOfBST(sequence, length) {
    if (sequence === null || length <= 0) {
        return false;
    }

    let root = sequence[length - 1];
    let i = 0;
    for (; i < length - 1; i++) {
        if (sequence[i] > root) {
            break;
        }
    }

    let j = i;
    for (; j < length - 1; j++) {
        if (sequence[j] < root) {
            return false;
        }
    }

    let left = true;

    if (i > 0) {
        left = VerifySquenceOfBST(sequence, i);
    }

    let right = true;
    if (i < length - 1) {
        right = VerifySquenceOfBST(sequence.slice(i, length - 1 - i));
    }

    return (left && right);
}

VerifySquenceOfBST([5,7,6,9,11,10,8], 7);
VerifySquenceOfBST([7,4,6,5],4);