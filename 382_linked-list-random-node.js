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
 * @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
 * @param {ListNode} head
 */
var Solution = function (head) {
    this.head = head;
};

/**
 * Returns a random node's value.
 * @return {number}
 */
Solution.prototype.getRandom = function () {
    var i = 1;
    var head = this.head;
    var ret;
    var dice;
    while (head.next != null) {
        // 要求的概率是1/i
        dice = Math.ceil(Math.random() * i);
        if (i == dice) {
            ret = head.val;
        }
        head = head.next;
        i++;
    }
    dice = Math.ceil(Math.random() * i);
    if (i == dice) {
        ret = head.val;
    }
    return ret;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
var veryEnd = new ListNode(3);
var _2 = new ListNode(2, veryEnd);
var veryHead = new ListNode(1, _2);
var obj = new Solution(veryHead)
console.log(obj.getRandom());
console.log(obj.getRandom());
console.log(obj.getRandom());