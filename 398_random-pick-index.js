/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    this.nums = nums;
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {
    var x = 1;
    var dice;
    var ret;
    for (var i = 0; i < this.nums.length; i++) {
        if (this.nums[i] == target) {
            dice = Math.ceil(Math.random() * x);
            if (x == dice) {
                ret = i;
            }
            x++;
        }
    }
    return ret;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
var obj = new Solution([1, 2, 3])
var param_1 = obj.pick(3)
console.log(param_1)