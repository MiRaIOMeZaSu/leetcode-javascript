/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    // 往前遍历,存储对每个线标的左边的最小值,往后遍历使用常量空间更新右边的最大值
    if (nums.length < 3) {
        return false;
    }
    min_list = [];
    var _min = nums[0];
    for (var i = 1; i < nums.length - 1; i++) {
        _min = Math.min(nums[i - 1], _min);
        min_list.push(_min);
    }
    var _max = nums[nums.length - 1];
    for (var i = 0; i < min_list.length; i++) {
        var j = nums.length - 1 - 1 - i;
        if (min_list[min_list.length - 1 - i] < nums[j] && nums[j] < _max) {
            return true;
        }
        _max = Math.max(_max, nums[j]);
    }
    return false;
};

console.log(increasingTriplet([1, 2, 3, 4, 5]));