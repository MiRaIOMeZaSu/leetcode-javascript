/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    // 使用二分法?
    // 查找左边界
    // 直接创建包含26个字符的数组
    var table = [];
    for (var i = 0; i < 26; i++) {
        table.push([]);
    }
    for (var i = 0; i < t.length; i++) {
        table[t[i].charCodeAt() - 97].push(i);
    }
    // 统计完毕
    var pos = -1;
    for (var i = 0; i < s.length; i++) {
        var indexs = table[s[i].charCodeAt() - 97];
        var right = indexs.length - 1;
        if (right == -1) {
            return false;
        } else {
            // 开始二分查找
            var left = 0;
            var mid;
            while (right > left) {
                mid = Math.floor(left + (right - left) / 2);
                if (indexs[mid] <= pos) {
                    left = mid + 1;
                } else if (indexs[mid] > pos) {
                    right = mid;
                }
            }
            // 此时left >=right
            mid = Math.floor(left + (right - left) / 2);
            if (indexs[mid] > pos) {
                pos = indexs[mid];
            } else {
                return false;
            }
        }
    }
    return true;
};
console.log(isSubsequence("aca", "aaaahhhbbbgddddcccda"));