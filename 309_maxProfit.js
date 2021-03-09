/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
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
    // i = 1时的base case
    if (day > 1) {
        // 至少为两天时
        dp[1][1] = Math.max(-prices[0], -prices[1]);
        dp[1][0] = Math.max(prices[1] - prices[0], 0)
    }

    for (var i = 2; i < day; i++) {
        // 第i+1天购入 或 i天到之前时购入的
        // ! 变化的地方
        dp[i][1] = Math.max(dp[i - 2][0] - prices[i], // 今天买入
            dp[i - 1][1] // 今天休息,当前持有的是之前买的
        );
        // 第i+1天购入 或 i天到之前时卖出的
        dp[i][0] = Math.max(prices[i] + dp[i - 1][1], // 今天卖出
            dp[i - 1][0] // 今天休息
        );
    }

    return Math.max(dp[day - 1][1], dp[day - 1][0]);
};


console.log(maxProfit([1, 2, 3, 0, 2]));