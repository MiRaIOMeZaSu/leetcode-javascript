/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    // 这个就是构造函数
    this.nums = nums;
    this.n = nums.length;
    this.mapN = {};
    this.mapN[1] = 1;
    for (var i = 2; i <= this.n; i++) {
        this.mapN[i] = this.mapN[i - 1] * i;
    }
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
    var toChange = this.nums.map((x) => x);
    var result = [];
    var index = Math.floor(Math.random() * this.mapN[this.n]);
    // console.log(index);
    // console.log(this.mapN[this.n]);
    for (var i = 0; i < this.n - 1; i++) {
        // 一共有this.n张牌
        var toPushIndex = Math.floor(index / this.mapN[this.n - i - 1]);
        index = index % this.mapN[this.n - i - 1];
        if (index == 0 && toPushIndex != 0) {
            toPushIndex--;
        }
        result.push(toChange[toPushIndex]);
        toChange.splice(toPushIndex, 1);
    }
    result.push(toChange[0]);
    return result;
};
// Solution.prototype.shuffle = function () {
//     var index;
//     var picked;
//     var result = [];
//     var toChange = this.nums.map((x) => x);
//     var map = {};
//     for (var i = 0; i < this.nums.length; i++) {
//         index = Math.floor(Math.random() * this.toChange.length);
//         picked = toChange[index];
//         result.push(picked);
//         toChange.
//     }
//     return result;
// };

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
var obj = new Solution([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, -11, -99, -98, -97, -96, -95, -94, -93, -92, -91, -90, -89, -88, -87, -86, -85, -84, -83, -82, -81, -80, -79, -78, -77, -76, -75, -74, -73, -72, -71, -70, -69, -68, -67, -66, -65, -64, -63, -62, -61, -60, -59, -58, -57, -56, -55, -54, -53, -52, -51, -50, -49, -48, -47, -46, -45, -44, -43, -42, -41, -40, -39, -38, -37, -36, -35, -34, -33, -32, -31, -30, -29, -28, -27, -26, -25, -24, -23, -22, -21, -20, -19, -18, -17, -16, -15, -14, -13, -12, -2, -10, -9, -8, -7, -6, -5, -4, -3, -1])
var param_1 = obj.reset()
var param_2 = obj.shuffle()
console.log(param_2)