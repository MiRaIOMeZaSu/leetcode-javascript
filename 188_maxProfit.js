/**
 * @param {number} j
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
    // j = n
    var day = prices.length;
    if (k == 0) {
        return 0;
    }
    if (day <= 2) {
        if (day <= 1) {
            return 0;
        } else {
            profit = prices[1] - prices[0]
            return profit > 0 ? profit : 0;
        }
    }

    var dp = new Array();
    // 对于dp table dp[i][j][j], i  = prices.length, j = 2, j = 2表示剩余次数
    for (var i = 0; i < day; i++) {
        dp.push([]);
        // dp.push([
        //     [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
        //     [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
        //     [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY]
        // ]);
        for (var j = 0; j < k; j++) {
            dp[i].push([Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY]);
        }
        dp[i].push([0, Number.NEGATIVE_INFINITY]);
    }
    // 0表示未持有,1表示持有
    // * base case设置
    // dp[0][1][0] = Number.NEGATIVE_INFINITY;
    dp[0][k - 1][1] = -prices[0];
    dp[0][k][0] = 0;
    // dp[0][2][1] = Number.NEGATIVE_INFINITY;

    // * 开始填充表格
    for (var i = 1; i < day; i++) {
        dp[i][k][1] = dp[0][k][1];
        for (var j = k - i >= 1 ? k - i : 1; j <= k; j++) {
            // * 范围为k-i..k,原来为1..k
            // for (var j = k; j > 0; j--) {
            //     // 第i+1天购入 或 i天到之前时购入的
            //     // ! 变化的地方
            dp[i][j - 1][1] = Math.max(dp[i - 1][j][0] - prices[i], // 今天买入
                dp[i - 1][j - 1][1] // 今天休息
            );
            //     dp[i][1] = Math.max(dp[i - 1][0] - prices[i], dp[i - 1][1]);
            //     // 第i+1天购入 或 i天到之前时卖出的
            //     dp[i][0] = Math.max(prices[i] + dp[i - 1][1], dp[i - 1][0]);
        }
        // TODO: j的终止条件
        // for (var j = k; j >= 0; j--) {
        for (var j = k - i >= 0 ? k - i : 0; j <= k; j++) {
            dp[i][j][0] = Math.max(prices[i] + dp[i - 1][j][1], // 今天卖出
                dp[i - 1][j][0] // 休息
            );
        }
    }
    dp[day - 1][0][0] = Math.max(prices[day - 1] + dp[day - 2][0][1], // 今天卖出
        dp[day - 2][0][0] // 休息
    );

    // return Math.max(dp[day - 1][1], dp[day - 1][0]);
    // return Math.max(Math.max(Math.max(dp[day - 1][0][0], dp[day - 1][0][1]),
    //         Math.max(dp[day - 1][1][0], dp[day - 1][1][1])),
    //     dp[day - 1][2][0]);
    var result = Number.NEGATIVE_INFINITY;

    // for (var j = k; j > 0; j--) {
    for (var j = 0; j <= k; j++) {
        for (var x = 0; x <= 1; x++) {
            result = Math.max(dp[day - 1][j][x], result)
        }
    }

    return result;
};


console.log(maxProfit(0, [1, 3]));