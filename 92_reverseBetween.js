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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    // 只要记录位置left-1,就相当于反转以left为头的链表从头到right
    // 反转从头到指定位置的两边使用递归
    // 最后返回的是新链头
    if (left == right) {
        // 无需反转
        return head;
    }
    if (left == 1) {
        // 从头开始反转
        return reverseN(head, right)
    }
    // 新的结合点
    var mixPoint = head;
    for (var i = 1; i < left - 1; i++) {
        mixPoint = mixPoint.next;
    }

    function reverseN(head, right) {
        // 反转前right个
        if (right == 1) {
            return head;
        }

        function reverse(head) {
            // 反转整个链
            if (head.next == null) {
                return head;
            }
            var last = head;
            var preLast = head;
            while (last.next != null) {
                preLast = last;
                last = last.next;
            }
            preLast.next = null;
            last.next = reverse(head)
            // 最后返回的是现在的链头,原来的链头变成了链尾
            return last;
        }
        var mixPoint = head;
        for (var i = 1; i < right; i++) {
            // 找到指向
            mixPoint = mixPoint.next;
        }
        afterMix = mixPoint.next;
        if (afterMix == null) {
            return reverse(head);
        }
        mixPoint.next = null;
        reverse(head)
        head.next = afterMix;
        return mixPoint;
        // reverseN(head, right - 1);
        // return last;
    };
    var afterMix = reverseN(mixPoint.next, right - left + 1);
    mixPoint.next = afterMix;

    return head;
};

// 创建链表
var veryEnd = new ListNode(5);
var _4 = new ListNode(4, veryEnd);
var _3 = new ListNode(3, _4);
var _2 = new ListNode(2, _3);
var veryHead = new ListNode(1, _2);
// 执行
var result = reverseBetween(veryHead, 4, 5);