/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices, fee) {
    // k = 正无穷
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
        // 第i+1天购入 或 i天到之前时购入的
        dp[i][1] = Math.max(dp[i - 1][0] - prices[i], dp[i - 1][1]);
        // 第i+1天购入 或 i天到之前时卖出的
        // ! 变化的地方
        dp[i][0] = Math.max(prices[i] + dp[i - 1][1] - fee, dp[i - 1][0]);
    }

    return Math.max(dp[day - 1][1], dp[day - 1][0]);
};


console.log(maxProfit([1, 3, 2, 8, 4, 9], 2));