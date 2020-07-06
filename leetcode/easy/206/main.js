/*
* 反转一个单链表。
示例:

输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
进阶:
你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val){
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head){
    var nodes = [];
    var ret = null;
    var curNode = head;
    while(curNode){
        nodes.push(curNode);
        curNode = curNode.next;
    }
    console.log(nodes);
    ret = nodes[nodes.length - 1];
    var cur = ret;
    for(var i = nodes.length - 2; i >= 0; i--){
        cur.next = i > 0 ? nodes[i] : null;
        cur = cur.next;
    }
    return ret;
}

function main(){
    var testNode = new ListNode(1);
    testNode.next = new ListNode(2);
    testNode.next.next = new ListNode(3);
    var tmp = testNode;
    while(tmp){
        console.log(tmp.val);
        tmp = tmp.next;
    }

    var revert = reverseList(testNode);
    while(revert){
        console.log("xxx",revert.val);
        revert = revert.next;
    }
};
main();

