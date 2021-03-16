/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort(function (a, b) {
        if (a[0] > b[0]) {
            return 1;
        } else if (a[0] == b[0]) {
            if (a[1] > b[1]) {
                return -1;
            } else {
                return 1;
            }
        } else {
            return -1;
        }
    });
    // 排序结束,遍历连接
    var result = [];
    var now = intervals[0];
    intervals.forEach(function (item) {
        if (item[0] <= now[1]) {
            // 可重叠
            now[1] = item[1] > now[1] ? item[1] : now[1];
        } else {
            result.push(now);
            now = item;
        }
    })
    if (result.length == 0 || result[result.length - 1][1] != now[1]) {
        result.push(now);
    }
    return result;
};

console.log(merge([
    [1, 4],
    [1, 5]
]))