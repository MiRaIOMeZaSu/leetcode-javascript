/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
    var result = [];
    envelopes.sort(function (a, b) {
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
    // 对于长相同的,将最大的排在前面(降序排列),以保证对长相同的最终中最长子序列只能选择其中一个
    // 此时开始对于宽的序列求最长递增子序列(动态规划)
    var dp = [];
    for (var i = 0; i < envelopes.length; i++) {
        dp.push([]);
        for (var j = 0; j < envelopes.length; j++) {
            dp[i].push(0);
        }
    }
    for (var i = envelopes.length - 1; i >= 0; i--) {
        dp[i][i] = 1;
    }
    for (var i = envelopes.length - 2; i >= 0; i--) {
        for (var j = i + 1; j < envelopes.length; j++) {
            if (envelopes[i][1] < envelopes[j][1]) {
                var min = Math.min(dp[i + 1][j], dp[i][j - 1]);
                if (Math.max(dp[i + 1][j], dp[i][j - 1]) > dp[i + 1][j - 1]) {
                    dp[i][j] = min + 1
                } else {
                    dp[i][j] = min
                }
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
            }
        }
    }

    return dp[0][envelopes.length - 1];
};
console.log(maxEnvelopes([
    [2, 100],
    [3, 200],
    [4, 300],
    [5, 500],
    [5, 400],
    [5, 250],
    [6, 370],
    [6, 360],
    [7, 380]
]));