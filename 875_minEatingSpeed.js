/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    // 最快速度也只能使最大堆的的香蕉数量
    // 最小速度为1
    // 应该使用二分法
    var left = 1;
    var right = 1;
    for (var i = 0; i < piles.length; i++) {
        left = Math.min(piles[i], left);
        right = Math.max(piles[i], right);
    }
    // var right = Math.max.apply(null, piles);
    var mid = Math.floor(left + (right - left) / 2);
    while (right > left) {
        mid = Math.floor(left + (right - left) / 2);
        if (isValid(mid, piles, h)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return right;
};

var isValid = function (speed, piles, h) {
    var time;
    for (var i = 0; i < piles.length; i++) {
        h -= Math.ceil(piles[i] / speed);
        if (h < 0) {
            return false;
        }
    }
    return true;
};

console.log(minEatingSpeed([30, 11, 23, 4, 20], 5));