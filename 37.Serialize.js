// 37，序列化二叉树
//反序列化时传参数 root 值为值类型，无法完成构造任务，暂未解决
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

let stream = [];

function Serialize(root, stream) {
    if (root === null) {
        stream.push('$');
        return;
    }
    stream.push(root.val);
    Serialize(root.left, stream);
    Serialize(root.right, stream);
}

function Deserialize(stream) {
    let root = null;
    Des(root, stream);
    return root;
    function Des(root, stream) {
        let num;
        if ((num = stream.shift()) != null && (typeof num === "number")) {
            root = new TreeNode(num);
            Des(root.left, stream);
            Des(root.right, stream);
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

Serialize(root, stream);
let newRoot = null;
newRoot = Deserialize(stream);