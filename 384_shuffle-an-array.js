// 对于每一个下标的数,都随机选择一个数字和自己交换值(可以和自己交换)
var Solution = function (nums) {
    this.nums = nums
};
Solution.prototype.reset = function () {
    return this.nums
};
Solution.prototype.shuffle = function () {
    var nums = this.nums.slice()
    nums.forEach((_, i, a, j) => (j = Math.random() * a.length | 0, [a[i], a[j]] = [a[j], a[i]]))
    return nums
};

var obj = new Solution([1, 2, 3])
var param_1 = obj.reset()
var param_2 = obj.shuffle()
console.log(param_2)