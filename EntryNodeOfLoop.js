//23链表中环的入口节点
//思路：先确定是否有环，用两个指针指向头结点，一个一次一步，一个一次两步。如果走得快的指针能追上走的慢的指针，则有环
//再确定环中节点数 n ，相遇的节点必然在环中，看走多少步能回到该位置
//用两个指针指向头结点，其中一个先向后走 n 步，再一起移动，因相差 n 步，相遇处必为入口


function ListNode(x) {
    this.val = x;
    this.next = null;
}

function meetingNode(head) {
    if (head === null) {
        return null;
    }
    let pSlow = head.next;
    if (pSlow === null) {
        return null;
    }
    let pFast = pSlow.next;

    while (pFast !== null && pSlow !== null) {
        if (pSlow === pFast) {
            return pFast;
        }
        pSlow = pSlow.next;
        pFast = pFast.next;
        if (pFast !== null) {
            pFast = pFast.next;
        }
    }

    return null;
}

function entryNodeOfLoop(head) {
    let meetingNode = meetingNode(head);
    if (!meetingNode) {
        return null;
    }

    let nodesInLoop = 1;
    let pNode1 = meetingNode;
    while (pNode1.next !== meetingNode) {
        pNode1 = pNode1.next;
        nodesInLoop++;
    }

    pNode1 = head;
    for (let i = 0; i < nodesInLoop; i++) {
        pNode1 = pNode1.next;
    }

    let pNode2 = head;
    while (pNode1 !== pNode2) {
        pNode1 = pNode1.next;
        pNode2 = pNode2.next;
    }

    return pNode1;
}