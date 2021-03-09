/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    // k = 1
    var day = prices.length;
    var dp = new Array();
    // 对于dp table dp[i][j], i  = prices.length, j = 2
    for (var i = 0; i < day; i++) {
        dp.push([0, 0]);
    }
    // 0表示未持有,1表示持有
    // base case设置
    dp[0][1] = -prices[0];

    // 开始填充表格
    for (var i = 1; i < day; i++) {
        // 第i+1天购入
        dp[i][1] = Math.max(-prices[i], dp[i - 1][1]);
        dp[i][0] = Math.max(prices[i] + dp[i - 1][1], dp[i - 1][0]);
    }

    return Math.max(dp[day - 1][1], dp[day - 1][0]);
};


console.log(maxProfit([7]));