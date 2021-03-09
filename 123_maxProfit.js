/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    // k = 2
    var day = prices.length;
    if (day <= 1) {
        return 0;
    }
    var dp = new Array();
    // 对于dp table dp[i][k][j], i  = prices.length, j = 2, k = 2表示剩余次数
    for (var i = 0; i < day; i++) {
        dp.push([
            [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
            [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
            [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY]
        ]);
    }
    // 0表示未持有,1表示持有
    // * base case设置
    // dp[0][1][0] = Number.NEGATIVE_INFINITY;
    dp[0][1][1] = -prices[0];
    dp[0][2][0] = 0;
    // dp[0][2][1] = Number.NEGATIVE_INFINITY;

    // * 开始填充表格
    for (var i = 1; i < day; i++) {
        dp[i][2][1] = dp[0][2][1];
        for (var k = 2; k > 0; k--) {
            //     // 第i+1天购入 或 i天到之前时购入的
            //     // ! 变化的地方
            dp[i][k - 1][1] = Math.max(dp[i - 1][k][0] - prices[i], // 今天买入
                dp[i - 1][k - 1][1] // 今天休息
            );
            //     dp[i][1] = Math.max(dp[i - 1][0] - prices[i], dp[i - 1][1]);
            //     // 第i+1天购入 或 i天到之前时卖出的
            //     dp[i][0] = Math.max(prices[i] + dp[i - 1][1], dp[i - 1][0]);
        }
        for (var k = 2; k >= 0; k--) {
            dp[i][k][0] = Math.max(prices[i] + dp[i - 1][k][1], // 今天卖出
                dp[i - 1][k][0] // 休息
            );
        }
    }
    dp[day - 1][0][0] = Math.max(prices[day - 1] + dp[day - 2][0][1], // 今天卖出
        dp[day - 2][0][0] // 休息
    );

    // return Math.max(dp[day - 1][1], dp[day - 1][0]);
    return Math.max(Math.max(Math.max(dp[day - 1][0][0], dp[day - 1][0][1]),
            Math.max(dp[day - 1][1][0], dp[day - 1][1][1])),
        dp[day - 1][2][0]);
};


console.log(maxProfit([7, 6, 4, 3, 1]));