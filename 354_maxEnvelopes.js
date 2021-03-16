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
    for (var i = envelopes.length - 1; i >= 0; i--) {
        dp.push(1);
    }
    for (var i = 1; i < envelopes.length; i++) {
        for (var j = 0; j < i; j++) {
            if (envelopes[i][1] > envelopes[j][1]) {
                dp[i] = Math.max(dp[j] + 1, dp[i]);
            }
            // else {
            //     dp[i] = Math.max(dp[j], dp[i]);
            // }
        }
    }
    var max = 1;
    for (var i = 1; i < envelopes.length; i++) {
        max = Math.max(max, dp[i]);
    }

    return max;
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