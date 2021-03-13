/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    // 1 <= text1.length <= 1000
    // 1 <= text2.length <= 1000
    // 输入的字符串只含有小写英文字符。
    var size1 = text1.length;
    var size2 = text2.length;
    var dp = new Array();
    for (var i = 0; i <= size1; i++) {
        dp.push([]);
        for (var j = 0; j <= size2; j++) {
            dp[i].push(0);
        }
    }
    // base case
    for (var i = 1; i <= size1; i++) {
        dp[i][1] = text1.slice(0, i).indexOf(text2[0]) != -1 ? 1 : 0;
    }
    for (var i = 1; i <= size2; i++) {
        dp[1][i] = text2.slice(0, i).indexOf(text1[0]) != -1 ? 1 : 0;
    }
    // 初始化完毕
    // 对于两个新入字符,若相等(text1[i]==text2[j])则dp[i][j]=dp[i-1][j-1]+1,否则取dp[i][j-1]和dp[i-1][j]间的最大值
    for (var i = 1; i < size1; i++) {
        for (var j = 1; j < size2; j++) {
            if (text1[i] == text2[j]) {
                dp[i + 1][j + 1] = dp[i][j] + 1;
            } else {
                dp[i + 1][j + 1] = Math.max(dp[i][j + 1], dp[i + 1][j]);
            }
        }
    }
    return dp[size1][size2];
};
console.log(longestCommonSubsequence("a", "a"));