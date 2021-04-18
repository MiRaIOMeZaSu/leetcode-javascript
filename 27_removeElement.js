/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    // 原定删除指定元素
    var index = 0;
    var i = 0;
    while (i < nums.length) {
        if (nums[i] != val) {
            if (i != index) {
                nums[index] = nums[i];
            }
            index++;
        }
        i++;
    }
    return index;
};

var ret = removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
console.log(ret);