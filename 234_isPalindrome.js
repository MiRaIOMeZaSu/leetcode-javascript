function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    // 使用函数栈队(后序遍历)
    // 寻找中点,从中点往后反转后依次比较
    if (head == null || head.next == null) {
        return true;
    }
    var ret = palindrome(head, head);
    return ret != null ? true : false;
};
var palindrome = function (head, now) {
    // 使用函数栈队(后序遍历)
    // 寻找中点,从中点往后反转后依次比较
    if (now.next == null) {
        // 此时为尾
        if (now.val == head.val) {
            return head.next;
        } else {
            return null;
        }
    }
    head = palindrome(head, now.next);
    if (head != null) {
        if (now.val == head.val) {
            if (head.next != null) {
                return head.next;
            } else {
                // 终结条件
                return head;
            }
        }
    } else {
        return null;
    }
};

var veryEnd = new ListNode(1);
var _4 = new ListNode(2, veryEnd);
var _3 = new ListNode(3, _4);
var _2 = new ListNode(2, _3);
var veryHead = new ListNode(1, _2);
console.log(isPalindrome(veryHead));