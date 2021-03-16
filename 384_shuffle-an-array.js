/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    // 这个就是构造函数
    this.nums = nums;
    this.n = nums.length;
    // this.mapN = {};
    // this.mapN[1] = 1;
    // for (var i = 2; i <= this.n; i++) {
    //     this.mapN[i] = this.mapN[i - 1] * i;
    // }
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
    return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */

Solution.prototype.shuffle = function () {
    var index;
    var picked;
    var result = [];
    var toChange = this.nums.map((x) => x);
    for (var i = 0; i < this.n; i++) {
        index = Math.floor(Math.random() * toChange.length);
        picked = toChange[index];
        result.push(picked);
        toChange.splice(index, 1);
    }
    return result;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
var obj = new Solution([1, 2, 3])
var param_1 = obj.reset()
var param_2 = obj.shuffle()
console.log(param_2)