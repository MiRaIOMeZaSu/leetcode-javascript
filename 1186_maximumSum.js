/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumSum = function (arr) {
    // 使用动态规划
    dp = new Array();
    for (var i = 0; i < arr.length; i++) {
        dp.push([0, 0]);
    }
    dp[0][0] = arr[0];
    dp[0][1] = arr[0];
    var ret = arr[0];
    for (var i = 1; i < arr.length; i++) {
        dp[i][0] = Math.max(dp[i - 1][0] + arr[i], arr[i]);
        dp[i][1] = Math.max(dp[i - 1][1] + arr[i], dp[i - 1][0] - arr[i - 1] + arr[i]);
        ret = Math.max(dp[i][1], ret);
        ret = Math.max(dp[i][0], ret);
    }
    return ret;
};

maximumSum([1, -2, 0, 3]);