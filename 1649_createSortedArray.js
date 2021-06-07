/**
 * @param {number[]} instructions
 * @return {number}
 */
var Tree = function (maxNum) {
    var treeSize = maxNum & (maxNum - 1) == 0 ? 2 * maxNum : 4 * maxNum;
    this.treeArr = new Array(treeSize).fill(0);
};

Tree.prototype.getRangeCount = function (targetStart, targetEnd, currStart, currEnd, n = 0) {
    if (targetEnd < currStart || targetStart > currEnd) {
        return 0;
    }
    if (targetStart <= currStart && targetEnd >= currEnd) {
        return this.treeArr[n];
    }
    // 开始二分
    var temp = (currStart + currEnd) >> 1;
    var a = this.getRangeCount(targetStart, targetEnd, currStart, temp, n * 2 + 1);
    var b = this.getRangeCount(targetStart, targetEnd, temp + 1, currEnd, n * 2 + 2);
    return a + b;
}

Tree.prototype.addNum = function (num, currStart, currEnd, n = 0) {
    // 延迟更新?
    if (currStart <= num && currEnd >= num) {
        this.treeArr[n]++;
        if (currStart != currEnd) {
            // 二分赋值
            var temp = (currStart + currEnd) >> 1;
            this.addNum(num, currStart, temp, n * 2 + 1);
            this.addNum(num, temp + 1, currEnd, n * 2 + 2);
        }
    }
}

var createSortedArray = function (instructions) {
    // 每次都是二分查找(贪心)
    // 直接使用搜索树无法获取相对数量!
    // 使用线段树判断?
    // 使用两个栈
    // 输入数字存在相同!(统计数量?)
    // 使用线段树统计!
    size = instructions.length;
    if (size < 3) {
        return 0;
    }
    var maxNum = Number.MIN_VALUE;
    for (i = 0; i < size; i++) {
        maxNum = Math.max(instructions[i], maxNum);
    }
    var tree = new Tree(maxNum);
    tree.addNum(instructions[0], 0, maxNum)
    tree.addNum(instructions[1], 0, maxNum)
    var ret = 0;
    var pivot = 1000000007;
    for (i = 2; i < size; i++) {
        // 包含前面的
        var temp1 = tree.getRangeCount(0, instructions[i] - 1, 0, maxNum);
        temp1 = Math.min(temp1, i - temp1);
        var temp2 = tree.getRangeCount(instructions[i] + 1, maxNum, 0, maxNum);
        temp2 = Math.min(temp2, i - temp2);
        var cost = Math.min(temp1, temp2);
        ret += cost;
        ret = ret % pivot;
        tree.addNum(instructions[i], 0, maxNum);
    }
    return ret;
};
var ret = createSortedArray([1, 3, 3, 3, 2, 4, 2, 1, 2]);
console.log(ret);