/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    if (height.length <= 2) {
        return 0;
    }
    // 对于每个位置,寻找左最高和右最高
    var l_max = height[0];
    var r_max = height[height.length - 1];
    var left = 0;
    var right = height.length - 1 - 1;
    var sum = 0;
    for (var i = 0; i < height.length; i++) {
        while (l_max > r_max) {
            if (right >= left) {
                if (left < i) {
                    l_max = Math.max(l_max, height[left]);
                    left++;
                }
                if (right >= i) {
                    sum += Math.min(r_max, l_max) > height[right] ? Math.min(r_max, l_max) - height[right] : 0;
                    r_max = Math.max(r_max, height[right]);
                    right--;
                }
            } else {
                return sum;
            }
        }
        // 此时可以开始计算
        if (right >= left) {
            sum += Math.min(r_max, l_max) > height[i] ? Math.min(r_max, l_max) - height[i] : 0;
        }
        l_max = Math.max(l_max, height[i]);
        left = i;
    }
    return sum;
};
console.log(trap([0, 2, 8, 2, 9, 7, 4]));