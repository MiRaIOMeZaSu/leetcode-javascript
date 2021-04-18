/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    // 返回的是整数
    var size = 0;
    var pre = null;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] != pre) {
            var temp = nums[i];
            nums[size] = temp;
            size++;
            pre = nums[i];
        }
    }
    return size;
};