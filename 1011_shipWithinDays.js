/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function (weights, D) {
    // 二分法
    // 范围: 最小等于最大货物重量,最大等于所有货物的和
    var left = 1;
    var right = 0;
    for (var i = 0; i < weights.length; i++) {
        right += weights[i];
        left = Math.max(weights[i], left);
    }
    while (right > left) {
        mid = Math.ceil(left + (right - left) / 2);
        if (isValid(mid, weights, D)) {
            right = mid - 1;
        } else {
            left = mid;
        }
    }
    return right;
};
var isValid = function (load, weights, D) {
    var i = 0;
    var all = 0;
    while (i < weights.length) {
        if (all + weights[i] < load) {
            all += weights[i];
        } else {
            D--;
            all = weights[i];
        }
        if (D <= 0) {
            return false;
        }
        i++;
    }
    return true;
}
console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));