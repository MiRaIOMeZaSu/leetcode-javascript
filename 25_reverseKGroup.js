/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    if (k == 1) {
        return head;
    }
    // 迭代
    var i = 1;
    var now = head;
    var inputHead = head;
    var lastTail = null;
    var ret = head;
    while (now != null) {
        if (i / k != 0 && i % k == 0) {
            var tail = now;
            var tempHead = tail.next;
            if (lastTail != null) {
                lastTail.next = tail;
            }
            now = now.next;
            if (k == i) {
                ret = tail;
            }
            reverse(inputHead, tail);
            lastTail = inputHead;
            inputHead = tempHead;
        } else {
            now = now.next;
        }
        i++;
    }
    if (lastTail != null) {
        lastTail.next = inputHead;
    }
    return ret;
};
var reverse = function (head, tail) {
    // 长度大于等于2
    var now = head.next;
    var tempHead = head;
    while (now != tail) {
        var tempNow = now.next;
        now.next = tempHead;
        tempHead = now;
        now = tempNow;
    }
    now.next = tempHead;
}

var veryEnd = new ListNode(5);
var _4 = new ListNode(4, veryEnd);
var _3 = new ListNode(3, _4);
var _2 = new ListNode(2, _3);
var veryHead = new ListNode(1, _2);
reverseKGroup(veryHead, 5);